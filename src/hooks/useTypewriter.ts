"use client";

import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  pauseBeforeTypeMs?: number;
};

export function useTypewriter(
  phrases: string[],
  {
    typingSpeedMs = 45,
    deletingSpeedMs = 25,
    pauseMs = 1400,
    pauseBeforeTypeMs = 300,
  }: UseTypewriterOptions = {},
): string {
  const [text, setText] = useState(phrases[0] ?? "");
  const phrasesKey = phrases.join("\0");

  useEffect(() => {
    if (typeof window === "undefined" || phrases.length === 0) return;

    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reduceMotionQuery.matches) {
      setText(phrases[0] ?? "");
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentPhrase = phrases[phraseIndex] ?? "";

      if (!deleting) {
        charIndex += 1;
        setText(currentPhrase.slice(0, charIndex));

        if (charIndex >= currentPhrase.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pauseMs);
          return;
        }
        timeoutId = setTimeout(tick, typingSpeedMs);
        return;
      }

      charIndex -= 1;
      setText(currentPhrase.slice(0, charIndex));

      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeoutId = setTimeout(tick, pauseBeforeTypeMs);
        return;
      }
      timeoutId = setTimeout(tick, deletingSpeedMs);
    };

    timeoutId = setTimeout(tick, typingSpeedMs);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrasesKey, typingSpeedMs, deletingSpeedMs, pauseMs, pauseBeforeTypeMs]);

  return text;
}
