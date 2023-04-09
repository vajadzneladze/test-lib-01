import * as React from "react";
import { SVGProps } from "react";
const SvgBubble = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38 2.97 0 5.38-2.41 5.38-5.38 0-2.97-2.41-5.38-5.38-5.38ZM6.36 13.03a3.329 3.329 0 1 0-.002 6.662 3.329 3.329 0 0 0 .002-6.662ZM16.62 16.62c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81Z"
    />
  </svg>
);
export default SvgBubble;
