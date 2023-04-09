import * as React from "react";
import { SVGProps } from "react";
const SvgSubtitle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM6.5 12.57h2.77c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Zm6.47 5.26H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.47a.749.749 0 1 1 0 1.5Zm4.53 0h-1.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.85c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3.76h-5.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.53c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </svg>
);
export default SvgSubtitle;
