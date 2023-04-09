import * as React from "react";
import { SVGProps } from "react";
const SvgAdditem = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.43 5.43v1.34c-2.62.21-4.11 1.89-4.11 4.66V16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10c2.29 0 3.43 1.14 3.43 3.43Z"
    />
    <path
      fill="#555F62"
      d="M18.57 8H14c-2.29 0-3.43 1.14-3.43 3.43v7.14c0 2.29 1.14 3.43 3.43 3.43h4.57c2.29 0 3.43-1.14 3.43-3.43v-7.14C22 9.14 20.86 8 18.57 8Zm-.44 7.75h-.88v.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.88h-.88c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.88v-.88c0-.41.34-.75.75-.75s.75.34.75.75v.88h.88c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </svg>
);
export default SvgAdditem;
