export type EaroRecommendation = {
  composition_id: string;
  ad_script: string;
  adName?: string;
};

const RECOMMEND_STATUS_POLL_MS = 15_000;
const RECOMMEND_STATUS_MAX_MS = 120_000;

export function getEaroApiUrl(): string {
  return (
    process.env.NEXT_PUBLIC_EARO_API_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export function getEaroAppUrl(): string {
  return (
    process.env.NEXT_PUBLIC_EARO_APP_URL?.replace(/\/$/, "") ||
    "https://app.earo.ai"
  );
}

export async function pollRecommendations(
  jobId: string,
  apiBase: string,
): Promise<EaroRecommendation[]> {
  const started = Date.now();

  while (Date.now() - started < RECOMMEND_STATUS_MAX_MS) {
    const res = await fetch(
      `${apiBase}/api/creative/v2/status?job_id=${encodeURIComponent(jobId)}`,
      { method: "GET" },
    );
    const json = await res.json().catch(() => ({}));

    if (
      json.status === "completed" &&
      Array.isArray(json.recommendations) &&
      json.recommendations.length > 0
    ) {
      return json.recommendations as EaroRecommendation[];
    }

    if (Array.isArray(json.recommendations) && json.recommendations.length > 0) {
      return json.recommendations as EaroRecommendation[];
    }

    if (json.status === "failed") {
      const msg =
        typeof json.error?.message === "string"
          ? json.error.message
          : "Ad recommendation failed";
      throw new Error(msg);
    }

    await new Promise((r) => setTimeout(r, RECOMMEND_STATUS_POLL_MS));
  }

  throw new Error("We couldn't finish your ad in time. Please try again.");
}

export async function generateFinalAudio(
  apiBase: string,
  input: Pick<EaroRecommendation, "composition_id" | "ad_script">,
): Promise<string> {
  const response = await fetch(`${apiBase}/api/creative/v2/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      composition_id: input.composition_id,
      ad_script: input.ad_script,
    }),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || result?.error) {
    throw new Error(
      typeof result?.error === "string"
        ? result.error
        : "Failed to generate final audio ad",
    );
  }

  const audioUrl = result?.result?.audio_ad?.audio_url;
  if (typeof audioUrl !== "string" || !audioUrl.trim()) {
    throw new Error("No audio URL returned from the server.");
  }

  return audioUrl.trim();
}

export function extractJobId(data: Record<string, unknown>): string {
  const audioAd = data.audioAd;
  if (typeof audioAd === "object" && audioAd !== null) {
    const jobId = (audioAd as { job_id?: unknown }).job_id;
    if (typeof jobId === "string" && jobId.trim()) {
      return jobId.trim();
    }
  }
  if (typeof data.jobId === "string" && data.jobId.trim()) {
    return data.jobId.trim();
  }
  return "";
}
