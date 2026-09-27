export function PorscheCrest({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 80" className={className} role="img" aria-label="Емблема Porsche">
      <path d="M32 2 L62 12 v28c0 20-14 32-30 38C16 72 2 60 2 40V12z" fill="currentColor" opacity="0.08" />
      <path d="M32 2 L62 12 v28c0 20-14 32-30 38C16 72 2 60 2 40V12z" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 10 L54 17 v23c0 15-10 25-22 30C20 65 10 55 10 40V17z" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <path d="M32 10 v60" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <path d="M10 33 h44" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="32" cy="24" r="4.5" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

export function PorscheLogo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-3 ${light ? "text-footer-foreground" : "text-foreground"}`}>
      <PorscheCrest className="h-8 w-auto" />
      <span className="brand-wordmark">PORSCHE</span>
    </span>
  );
}
