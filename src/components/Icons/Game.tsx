import * as React from "react";
import { SVGProps } from "react";
const SvgGame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#555F62"
      d="M16.65 5.72h-9.3C4.4 5.72 2 8.12 2 11.07v5.58C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65v-5.58c0-2.95-2.4-5.35-5.35-5.35Zm-2.15 6.3c0-.55.45-1 1-1s1 .45 1 1-.45 1.01-1 1.01-1-.44-1-.99v-.02Zm-4.37 4.05c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.03-1.03-.99.99c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.99-.99-.96-.96a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.96.96.99-.99c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.99.99 1.03 1.03c.29.29.29.77 0 1.06ZM13.54 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1Zm1.96 1.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01ZM17.48 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1Z"
    />
    <path
      fill="#555F62"
      d="m13.64 2.71-.01.94A1.64 1.64 0 0 1 12 5.26c-.15 0-.24.1-.24.23s.1.23.23.23h-1.61c-.01-.07-.02-.15-.02-.23 0-.9.73-1.63 1.62-1.63.15 0 .25-.1.25-.23l.01-.94c.01-.38.32-.69.7-.69h.01c.39 0 .69.32.69.71Z"
    />
  </svg>
);
export default SvgGame;
