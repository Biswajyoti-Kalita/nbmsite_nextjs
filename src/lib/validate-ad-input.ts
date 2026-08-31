const URL_LIKE = /^(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+([/?#].*)?$/i;

function looksLikeUrl(value: string): boolean {
  return URL_LIKE.test(value);
}

const COMMON_BIGRAMS = new Set([
  "th", "he", "in", "er", "an", "re", "on", "at", "en", "nd", "ti", "es", "or",
  "te", "of", "ed", "is", "it", "al", "ar", "st", "to", "nt", "ng", "se", "ha",
  "as", "ou", "io", "le", "ve", "co", "me", "de", "hi", "ri", "ro", "ic", "ne",
  "ea", "ra", "ce",
  "ch", "sh", "ph", "wh", "ck", "gh", "qu", "ll", "ss", "ff", "ee", "oo",
  "ly", "ty", "ry", "ny", "ay", "ey", "oy", "ow", "ew", "aw", "ie", "ei",
  "au", "ai", "oa",
  "ma", "si", "om", "ur", "ca", "el", "ta", "la", "ns", "di", "fo", "ho",
  "pe", "no", "ct", "us", "ac", "ot", "il", "tr", "nc", "ex", "rs", "un",
  "lo", "wa", "wi", "em", "ad", "ol", "ge", "wo",
]);

const BIGRAM_THRESHOLD = 0.25;

const EMOJI_MODIFIERS = new RegExp(
  `[${String.fromCharCode(0x200d, 0xfe0f)}]`,
  "g",
);

function stripEmoji(value: string): string {
  return value
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(EMOJI_MODIFIERS, "");
}

function hasLowCharacterDiversity(value: string): boolean {
  const chars = Array.from(value.replace(/\s+/g, ""));
  if (chars.length < 6) return false;
  const unique = new Set(chars).size;
  return unique <= 3 || unique / chars.length < 0.25;
}

function looksLikeWords(rawValue: string): boolean {
  const value = stripEmoji(rawValue).trim();
  if (value === "") return false;

  if (/[^\x00-\x7F]/u.test(value)) {
    return !hasLowCharacterDiversity(value);
  }

  const letters = value.toLowerCase().replace(/[^a-z]/g, "");
  if (letters.length === 0) return false;

  if (/(.)\1{3,}/i.test(letters)) return false;

  const isSingleShortWord = letters.length <= 6 && !/\s/.test(value.trim());
  if (letters.length < 4 || isSingleShortWord) return true;

  let common = 0;
  for (let i = 0; i < letters.length - 1; i++) {
    if (COMMON_BIGRAMS.has(letters.slice(i, i + 2))) common++;
  }
  return common / (letters.length - 1) >= BIGRAM_THRESHOLD;
}

export function getAdInputError(rawValue: string): string | null {
  const value = rawValue.trim();

  if (value === "") {
    return "Please enter a URL or a short description.";
  }

  if (looksLikeUrl(value)) {
    return null;
  }

  const wordCount = value.split(/\s+/).filter(Boolean).length;
  if (wordCount < 5) {
    return "Please enter at least 5 words, or paste a URL.";
  }

  if (looksLikeWords(value)) {
    return null;
  }

  return "That doesn't look like a URL or a real description — please paste a link or describe your brand.";
}

export const EMPTY_URL_TOOLTIP_MESSAGE = "Add your url below";

export type AdInputValidation =
  | { kind: "empty"; message: typeof EMPTY_URL_TOOLTIP_MESSAGE }
  | { kind: "invalid"; message: string }
  | null;

export function classifyAdInput(rawValue: string): AdInputValidation {
  const message = getAdInputError(rawValue);
  if (!message) return null;
  return rawValue.trim() === ""
    ? { kind: "empty", message: EMPTY_URL_TOOLTIP_MESSAGE }
    : { kind: "invalid", message };
}
