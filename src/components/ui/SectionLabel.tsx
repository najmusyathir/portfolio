interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p
      className="gradient-text"
      style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        margin: 0,
      }}
    >
      {label}
    </p>
  );
}
