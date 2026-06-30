export type ThankYouSource = "brief" | "campaign-enquiry" | "mediakit";

export const THANK_YOU_SOURCES: ThankYouSource[] = ["brief", "campaign-enquiry"];

export type ThankYouContent = {
  tag: string;
  title: string;
  description: string;
  note?: string;
};

export const THANK_YOU_CONTENT: Record<ThankYouSource, ThankYouContent> = {
  mediakit: {
    tag: "Media kit received",
    title: "Check your inbox — you'll find an email from Suzi at Next Audio with your media kit.",
    description: "",
    note: ""
  },
  brief: {
    tag: "Brief submitted",
    title: "Your brief has been submitted",
    description: "Someone from the team will get back to you shortly.",
    note: "We typically respond within one business day.",
  },
  "campaign-enquiry": {
    tag: "Enquiry received",
    title: "You'll hear from us within 48 hours",
    description:
      "We will reply with show recommendations and initial thoughts on your campaign.",
    note: "Check your inbox — including your spam folder.",
  },
};

export function getThankYouContent(source: string | null | undefined): ThankYouContent {
  console.log({source});

  if (source && source in THANK_YOU_CONTENT) {
    return THANK_YOU_CONTENT[source as ThankYouSource];
  }

  return THANK_YOU_CONTENT.brief;
}
