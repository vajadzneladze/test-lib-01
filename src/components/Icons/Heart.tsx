import * as React from "react";
import { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23A5.549 5.549 0 0 0 7.56 3.1C4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z"
    />
  </svg>
);
export default SvgHeart;
