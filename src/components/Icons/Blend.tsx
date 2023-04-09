import * as React from "react";
import { SVGProps } from "react";
const SvgBlend = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.97 12a6.005 6.005 0 0 1-8.119 5.614c-.319-.121-.378-.529-.156-.788A7.406 7.406 0 0 0 15.47 12a7.41 7.41 0 0 0-1.772-4.825c-.223-.26-.164-.669.156-.79A6.005 6.005 0 0 1 21.97 12Z"
    />
    <path
      fill="#555F62"
      d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46Z"
    />
  </svg>
);
export default SvgBlend;
