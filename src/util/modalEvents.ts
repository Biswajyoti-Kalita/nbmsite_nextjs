// Modal event utilities for decoupled modal communication

export const MODAL_EVENTS = {
  OPEN_CALL_ME_BACK: 'openCallMeBack',
  CLOSE_CALL_ME_BACK: 'closeCallMeBack',
  OPEN_SHARE_BRIEF: 'openShareBrief',
  CLOSE_SHARE_BRIEF: 'closeShareBrief',
  OPEN_HUBSPOT: 'openHubspot',
  CLOSE_HUBSPOT: 'closeHubspot',
} as const;

export const openCallMeBackModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(MODAL_EVENTS.OPEN_CALL_ME_BACK));
  }
};

export const closeCallMeBackModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(MODAL_EVENTS.CLOSE_CALL_ME_BACK));
  }
};

export const openShareBriefModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(MODAL_EVENTS.OPEN_SHARE_BRIEF));
  }
};

export const closeShareBriefModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(MODAL_EVENTS.CLOSE_SHARE_BRIEF));
  }
};

export const openHubspotModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(MODAL_EVENTS.OPEN_HUBSPOT));
  }
};

export const closeHubspotModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(MODAL_EVENTS.CLOSE_HUBSPOT));
  }
};

