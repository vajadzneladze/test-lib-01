import * as React from "react";
import { SVGProps } from "react";
const SvgArrowSquareUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.13 12c-.15.15-.34.22-.53.22s-.38-.08-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.76 0 1.06Z"
    />
  </svg>
);
export default SvgArrowSquareUp;
