import * as React from "react";
import { SVGProps } from "react";
const SvgAlignHorizontally = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1ZM4.75 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2v1.5ZM13.25 11.25h-3v1.5h3v-1.5ZM21.25 12.75h-2.5v-1.5h2.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM13.25 15.4V8.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1Z"
    />
  </svg>
);
export default SvgAlignHorizontally;
