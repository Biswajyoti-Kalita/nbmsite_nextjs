type CategoryIconProps = {
  name: string;
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function CategoryIcon({ name, className = "w-8 h-8" }: CategoryIconProps) {
  switch (name) {
    case "retail":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M8 12h4l1-5h6l1 5h4v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V12z" {...strokeProps} />
          <path d="M12 12v-1a4 4 0 0 1 8 0v1" {...strokeProps} />
          <path d="M18 14h6v12a2 2 0 0 1-2 2h-4" {...strokeProps} />
        </svg>
      );
    case "fashion":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M12 6c0 2 1.5 4 4 4s4-2 4-4" {...strokeProps} />
          <path d="M10 10l-3 4 3 2v10h12V16l3-2-3-4" {...strokeProps} />
        </svg>
      );
    case "beauty":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M12 8h8v4H12z" {...strokeProps} />
          <path d="M11 12h10v14a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V12z" {...strokeProps} />
          <path d="M14 5h4v3h-4z" {...strokeProps} />
        </svg>
      );
    case "finance":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M5 26h22" {...strokeProps} />
          <path d="M7 26V14l9-8 9 8v12" {...strokeProps} />
          <path d="M13 26v-6h6v6" {...strokeProps} />
          <path d="M11 16h2M19 16h2M15 12h2" {...strokeProps} />
        </svg>
      );
    case "b2b":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M6 12h20v14H6z" {...strokeProps} />
          <path d="M12 12V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" {...strokeProps} />
          <path d="M6 18h20" {...strokeProps} />
        </svg>
      );
    case "technology":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <rect x="4" y="8" width="16" height="12" rx="1" {...strokeProps} />
          <path d="M10 20v3h4v-3" {...strokeProps} />
          <rect x="22" y="12" width="6" height="10" rx="1" {...strokeProps} />
        </svg>
      );
    case "telecoms":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M16 22v5M12 27h8" {...strokeProps} />
          <path d="M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" {...strokeProps} />
          <path d="M10 12a8 8 0 0 1 12 0M7 8a12 12 0 0 1 18 0" {...strokeProps} />
        </svg>
      );
    case "food":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M8 14h16l-1.5 12H9.5L8 14z" {...strokeProps} />
          <path d="M11 14V10a5 5 0 0 1 10 0v4" {...strokeProps} />
          <path d="M14 18h4M13 22h6" {...strokeProps} />
        </svg>
      );
    case "travel":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path
            d="M5 18l9-2 3-8 2 1-2 7 7 2 2-3 1.5 1-3 5-16 1z"
            {...strokeProps}
          />
        </svg>
      );
    case "automotive":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path d="M6 18l2-6h16l2 6" {...strokeProps} />
          <path d="M4 18h24v5H4z" {...strokeProps} />
          <circle cx="9" cy="23" r="2" {...strokeProps} />
          <circle cx="23" cy="23" r="2" {...strokeProps} />
          <path d="M10 15h4M18 15h4" {...strokeProps} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <circle cx="16" cy="16" r="10" {...strokeProps} />
        </svg>
      );
  }
}
