import * as React from "react";
import { SVGProps } from "react";
const SvgWoman = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 9c0-3.87-3.13-7-7-7S5 5.13 5 9c0 3.62 2.74 6.59 6.25 6.96v2.29H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.25H15c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25v-2.29A6.995 6.995 0 0 0 19 9Z"
    />
  </svg>
);
export default SvgWoman;
