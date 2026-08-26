export type TagTone = "strong" | "opportunity" | "broad";

export type AudienceTagGroup = {
  title: string;
  tone: TagTone;
  tags: string[];
};

export type SpotlightShow = {
  name: string;
  artworkUrl: string;
  hasAccess?: boolean;
};

export type EvidenceCard = {
  headline: string;
  description: string;
  source: string;
  href?: string;
};

export type BfcmCategoryContent = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  ready: boolean;
  heroTitle: string;
  audienceIntro: string;
  brandSafetyNote: string;
  tagGroups: AudienceTagGroup[];
  spotlightIntro: string;
  spotlightShows: SpotlightShow[];
  surprisePicks: SpotlightShow[];
  surpriseNote: string;
  accessKey: string;
  evidenceCards: EvidenceCard[];
};

export type BfcmCategoryMeta = {
  slug: string;
  name: string;
  icon: string;
  ready: boolean;
};
