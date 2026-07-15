interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

/** Consistent section header: mono eyebrow + display title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      style={{
        maxWidth: intro ? "44ch" : undefined,
        marginInline: align === "center" ? "auto" : undefined,
        textAlign: align,
      }}
    >
      {eyebrow && (
        <span className="eyebrow" style={{ marginBottom: "1rem" }}>
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          fontSize: "var(--text-3xl)",
          marginTop: eyebrow ? "1rem" : 0,
          marginBottom: intro ? "0.9rem" : 0,
        }}
      >
        {title}
      </h2>
      {intro && (
        <p style={{ color: "var(--c-body)", fontSize: "var(--text-lg)", margin: 0 }}>
          {intro}
        </p>
      )}
    </div>
  );
}
