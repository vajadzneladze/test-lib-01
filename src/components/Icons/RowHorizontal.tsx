import * as React from "react";
import { SVGProps } from "react";
const SvgRowHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 4.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1ZM2 4.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1Z"
    />
  </svg>
);
export default SvgRowHorizontal;
