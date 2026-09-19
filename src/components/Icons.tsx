import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 5v14m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="m4.5 10.2 3.3 3.3 7.7-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.6Z" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.2 7.6c.2-.4.4-.4.8-.4h.3c.2 0 .4 0 .5.4l.8 2c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.5 0 .7.5.9 1.3 1.7 2.2 2.2.2.1.5.2.7 0l.8-.9c.2-.2.4-.3.7-.1l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.4-.8 1.9-.5.4-1.2.7-2 .6-1.2-.2-2.8-.7-4.6-2.3-1.5-1.4-2.6-3.2-2.8-4.5-.2-1 .2-1.8.5-2.3l.4-.1Z" fill="currentColor" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M13 5h6v6M19 5l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 7H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
