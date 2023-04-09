import * as React from "react";
import { SVGProps } from "react";
const SvgShapes1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.75 7H7c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75C17 9.35 14.65 7 11.75 7Z"
    />
    <path
      fill="#555F62"
      d="M21.88 6.33c.525 2.56-.718 4.882-2.72 5.976-.308.168-.66-.072-.66-.422v-.134c0-3.44-2.81-6.25-6.25-6.25h-.133c-.351 0-.59-.351-.423-.66 1.094-2.002 3.416-3.244 5.976-2.72 2.09.43 3.78 2.12 4.21 4.21Z"
    />
  </svg>
);
export default SvgShapes1;
