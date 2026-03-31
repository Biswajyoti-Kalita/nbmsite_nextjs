"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { openShareBriefModal } from "@/util/modalEvents";

export default function LaunchRequestForm() {
  const searchParams = useSearchParams();
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (hasOpenedRef.current) return;
    if (searchParams.get("request-proposal") !== "yes") return;
    hasOpenedRef.current = true;
    openShareBriefModal();
  }, [searchParams]);

  return null;
}
