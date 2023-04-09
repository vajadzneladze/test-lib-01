import * as React from "react";
import { SVGProps } from "react";
const SvgTrade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#555F62" d="M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
    <path
      fill="#555F62"
      d="M22 8.5c0 3.26-2.4 5.95-5.52 6.42v-.06c-.31-3.88-3.46-7.03-7.37-7.34h-.03A6.495 6.495 0 0 1 15.5 2 6.5 6.5 0 0 1 22 8.5ZM5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2ZM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71Z"
    />
  </svg>
);
export default SvgTrade;
