export function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--color-border)',
        padding: '28px 24px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          color: 'var(--color-text-muted)',
          fontSize: '0.875rem',
          margin: '0 0 6px 0',
        }}
      >
        &copy; {new Date().getFullYear()} Najmu Syathir — built by me and my AI team.
      </p>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--color-text-subtle)',
          margin: 0,
        }}
      >
        self-hosted with care in Malaysia
      </p>
    </footer>
  );
}
