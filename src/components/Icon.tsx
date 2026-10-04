import type { ReactNode } from 'react'

// Hand-drawn line icon set: 24×24 grid, 1.75 stroke, round caps.
const paths = {
  tooth: (
    <path d="M7.5 3C5.3 3 3.75 4.7 3.75 7c0 2 .8 3.5 1.3 5.4.5 2 .7 4.6 1.4 6.6.4 1.2 1 2 1.8 2 1.6 0 1.7-3.6 2.5-5 .3-.6.7-.9 1.25-.9s.95.3 1.25.9c.8 1.4.9 5 2.5 5 .8 0 1.4-.8 1.8-2 .7-2 .9-4.6 1.4-6.6.5-1.9 1.3-3.4 1.3-5.4 0-2.3-1.55-4-3.75-4-1.9 0-2.9 1-4.5 1S9.4 3 7.5 3z" />
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.1-7 9.5-4.1-1.4-7-5.2-7-9.5V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3.5h12V21l-3-1.75L12 21l-3-1.75L6 21V3.5z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <path d="M12 7.5l4 2.25v4.5L12 16.5l-4-2.25v-4.5L12 7.5z" />
      <path d="M8 9.75l4 2.25 4-2.25M12 12v4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M11 3.5l1.6 4.4 4.4 1.6-4.4 1.6L11 15.5l-1.6-4.4L5 9.5l4.4-1.6L11 3.5z" />
      <path d="M18 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
    </>
  ),
  implant: (
    <>
      <path d="M7.5 3.5h9a1 1 0 0 1 .95 1.3L16.5 8h-9l-.95-3.2A1 1 0 0 1 7.5 3.5z" />
      <path d="M9.5 8v2.5h5V8" />
      <path d="M10 10.5h4l-.6 8.5-1.4 1.5-1.4-1.5-.6-8.5z" />
      <path d="M10.2 13.5h3.6M10.4 16.5h3.2" />
    </>
  ),
  braces: (
    <>
      <path d="M3 9.5c3.5-2 14.5-2 18 0M3 14.5c3.5 2 14.5 2 18 0M3 12h18" />
      <rect x="5.5" y="10.5" width="2.5" height="3" rx=".5" fill="currentColor" />
      <rect x="10.75" y="10.5" width="2.5" height="3" rx=".5" fill="currentColor" />
      <rect x="16" y="10.5" width="2.5" height="3" rx=".5" fill="currentColor" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="13" r="7.5" />
      <path d="M9.5 12.25h.01M14.5 12.25h.01" strokeWidth={2.5} />
      <path d="M9.75 15.75c1.3 1 3.2 1 4.5 0" />
      <path d="M12 5.5c0-1.4.9-2.25 2.25-2.25" />
    </>
  ),
  phone: (
    <path d="M5.5 4h3l1.5 4.25-2 1.25a11 11 0 0 0 6.5 6.5l1.25-2L20 15.5v3a1.5 1.5 0 0 1-1.6 1.5C10.6 19.5 4.5 13.4 4 5.6A1.5 1.5 0 0 1 5.5 4z" />
  ),
  mapPin: (
    <>
      <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.25" />
    </>
  ),
  star: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 3.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.9l-5.25 2.75 1-5.85L3.5 9.65l5.9-.85L12 3.5z"
    />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  chevronDown: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export function Icon({ name, className = 'size-6' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
