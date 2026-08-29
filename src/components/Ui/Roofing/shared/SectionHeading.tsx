interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) => {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
            light ? "bg-white/10 text-gold-400" : "bg-brand-600/10 text-brand-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-brand-900/60"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
