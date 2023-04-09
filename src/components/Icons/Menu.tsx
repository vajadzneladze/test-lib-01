import * as React from "react";
import { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.54 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM6.46 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM17.54 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM6.46 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
    />
  </svg>
);
export default SvgMenu;
