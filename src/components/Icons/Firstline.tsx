import * as React from "react";
import { SVGProps } from "react";
const SvgFirstline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 5.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 10.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58v2.85c0 1.4.68 2.08 2.08 2.08h2.85c1.4 0 2.08-.68 2.08-2.08V5.58C10 4.18 9.32 3.5 7.92 3.5Z"
    />
  </svg>
);
export default SvgFirstline;