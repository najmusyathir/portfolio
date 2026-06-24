interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span
      style={{
        backgroundColor: 'var(--color-bg-overlay)',
        border: '1px solid var(--color-border)',
        borderRadius: '6px',
        padding: '4px 10px',
        fontSize: '0.75rem',
        fontWeight: 500,
        color: 'var(--color-text-muted)',
        display: 'inline-block',
      }}
    >
      {label}
    </span>
  );
}
