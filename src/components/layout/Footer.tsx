export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '24px',
        textAlign: 'center',
        color: 'var(--color-text-subtle)',
        fontSize: '0.875rem',
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Najmu Syathir. Built with Next.js.
      </p>
    </footer>
  );
}
