import * as React from "react";
import { SVGProps } from "react";
const SvgChart2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM7.75 13.6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.2c0-.41.34-.75.75-.75s.75.34.75.75v3.2Zm5 1.74c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.66c0-.41.34-.75.75-.75s.75.34.75.75v6.68Zm5-1.74c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.2c0-.41.34-.75.75-.75s.75.34.75.75v3.2Z"
    />
  </svg>
);
export default SvgChart2;