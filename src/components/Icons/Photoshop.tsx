import * as React from "react";
import { SVGProps } from "react";
const SvgPhotoshop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#555F62" d="M9.5 8.75H8.25v2.5H9.5a1.25 1.25 0 0 0 0-2.5Z" />
    <path
      fill="#555F62"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.5 12.75H8.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75Zm5.75 0c1.1 0 2 .9 2 2s-.9 2-2 2H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.1 0-2-.9-2-2s.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-.28 0-.5.22-.5.5s.22.5.5.5Z"
    />
  </svg>
);
export default SvgPhotoshop;
