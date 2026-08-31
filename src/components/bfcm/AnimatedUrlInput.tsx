"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

export const EARO_URL_PLACEHOLDER_PHRASES = [
  "Paste your Shopify url",
  "Paste your podcast show url",
  "Paste your Instagram account url",
];

const AnimatedUrlInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { phrases: string[] }
>(({ phrases, ...inputProps }, ref) => {
  const placeholder = useTypewriter(phrases);
  return <input {...inputProps} ref={ref} placeholder={placeholder} />;
});
AnimatedUrlInput.displayName = "AnimatedUrlInput";

export default AnimatedUrlInput;
