"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  MODAL_EVENTS,
  closeHubspotModal,
} from "@/util/modalEvents";

const HUBSPOT_PORTAL_ID = "22605202";
const HUBSPOT_FORM_ID = "266c2ea5-d205-45f9-90ee-a77597da6644";
const HUBSPOT_REGION = "na1";
const HUBSPOT_EMBED_SCRIPT = `https://js.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

export default function HubspotFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const handleOpen = () => {
      setFormKey((key) => key + 1);
      setIsOpen(true);
    };
    const handleClose = () => setIsOpen(false);

    window.addEventListener(MODAL_EVENTS.OPEN_HUBSPOT, handleOpen);
    window.addEventListener(MODAL_EVENTS.CLOSE_HUBSPOT, handleClose);

    return () => {
      window.removeEventListener(MODAL_EVENTS.OPEN_HUBSPOT, handleOpen);
      window.removeEventListener(MODAL_EVENTS.CLOSE_HUBSPOT, handleClose);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHubspotModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <Script
        id="hubspot-embed-script"
        src={HUBSPOT_EMBED_SCRIPT}
        strategy="lazyOnload"
        onReady={() => setScriptReady(true)}
      />

      {isOpen ? (
        <div
        className="fixed inset-0 z-[10000] flex items-end lg:items-center justify-center p-0 bg-black/40"
        onClick={closeHubspotModal}
      >
        <div
          className="relative w-full lg:w-auto max-w-[720px] max-h-[90vh] overflow-y-auto shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full min-w-[400px] flex flex-col items-start justify-start gap-[20px] bg-[#FFFEFF] rounded-[16px] mt-0">
            <Image
              src="/assets/images/close.png"
              alt="Close"
              width={12}
              height={12}
              className="w-[12px] h-[12px] absolute top-[20px] right-[20px] lg:top-[40px] lg:right-[40px] cursor-pointer"
              onClick={closeHubspotModal}
            />

            <div className="w-full min-h-[200px]">
              {scriptReady ? (
                <div
                  key={formKey}
                  className="hs-form-frame"
                  data-region={HUBSPOT_REGION}
                  data-form-id={HUBSPOT_FORM_ID}
                  data-portal-id={HUBSPOT_PORTAL_ID}
                />
              ) : (
                <p className="text-[#667085] text-[14px] leading-[20px]">
                  Loading form…
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  );
}
