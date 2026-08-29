/* ================= LOGO MARK (SVG) ================= */
/* A house-with-shield glyph — evokes protection + roofing without needing
   an external asset. Reused as-is on both light (Navbar) and dark (Footer)
   backgrounds since the circle carries its own brand fill. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="20" fill="#14213B" />
    <path d="M10 21.5 20 12l10 9.5" stroke="#FF9D2E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 19.5V28h14v-8.5" stroke="#EEF2F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 28v-5h6v5" stroke="#FF9D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-7 h-7", text: "text-lg" },
  md: { icon: "w-9 h-9", text: "text-xl" },
  lg: { icon: "w-11 h-11", text: "text-2xl" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span
        className={`font-heading font-bold leading-none whitespace-nowrap tracking-tight ${text} ${
          variant === "dark" ? "text-brand-900" : "text-white"
        }`}
      >
        Ironclad
        <span className={variant === "dark" ? "text-brand-600" : "text-gold-400"}> Roofing</span>
      </span>
    </span>
  );
};

export default Logo;
