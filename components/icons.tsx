import { SVGProps } from "react";

export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M13.6 7.2c-3.67 1.47-6.51 4.67-7.03 8.38-.48 3.33 1.34 6.1 4.28 6.65 2.52.47 4.72-.93 4.72-3.63 0-2.17-1.5-3.57-3.58-3.57-.4 0-.87.05-1.28.16.42-1.78 1.84-3.33 3.71-4.22l-.82-3.77Zm12.16 0c-3.67 1.47-6.51 4.67-7.03 8.38-.48 3.33 1.34 6.1 4.28 6.65 2.52.47 4.72-.93 4.72-3.63 0-2.17-1.5-3.57-3.58-3.57-.4 0-.87.05-1.28.16.42-1.78 1.84-3.33 3.71-4.22l-.82-3.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
