export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2z" />
      <path d="M9.2 8.6c.3-.5.8-.5 1-.1l.8 1.6c.1.3 0 .6-.2.8l-.5.5c.6 1.2 1.6 2.1 2.8 2.7l.6-.6c.2-.2.5-.3.8-.1l1.6.8c.4.2.4.7 0 1.1-.6.7-1.6 1-2.5.7-2.8-.9-4.7-2.8-5.4-5.2-.2-.6 0-1.1.5-1.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
