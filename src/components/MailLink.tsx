'use client';

import { useSyncExternalStore } from 'react';

const noopSubscribe = () => () => {};
/** true once mounted on the client; false on the server and during hydration. */
function useMounted() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

interface MailLinkProps {
  /** the email address, without mailto: */
  email: string;
  className?: string;
  style?: React.CSSProperties;
  /** rendered before the address — icon, dot, "email:" label, whatever */
  prefix?: React.ReactNode;
  valueClassName?: string;
  valueStyle?: React.CSSProperties;
  /** shown for one tick before mount resolves the real address */
  placeholder?: string;
}

/**
 * A mailto: link that only exists client-side.
 *
 * Cloudflare's Email Address Obfuscation rewrites any literal email
 * text/href in the server response, then decodes it back by mutating
 * the DOM before React hydrates — a real (if benign) hydration
 * mismatch (React error #418, since it swaps in a `<span
 * class="__cf_email__">` where React expected a plain text node).
 * Keeping the address out of the server-rendered HTML entirely means
 * Cloudflare's edge proxy never sees it to rewrite, and the mailto
 * attaches as an ordinary post-mount state update instead of a
 * hydration diff.
 */
export function MailLink({
  email,
  className,
  style,
  prefix,
  valueClassName,
  valueStyle,
  placeholder = 'resolving…',
}: MailLinkProps) {
  const mounted = useMounted();

  return (
    <a
      href={mounted ? `mailto:${email}` : undefined}
      className={className}
      style={{ ...style, cursor: mounted ? 'pointer' : 'default' }}
      aria-label="Email Najmu"
    >
      {prefix}
      <span className={valueClassName} style={valueStyle}>
        {mounted ? email : placeholder}
      </span>
    </a>
  );
}
