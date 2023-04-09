import * as React from "react";
import { SVGProps } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.59 7.41 6.31 17.69c-.48.48-1.3.37-1.59-.24a8.122 8.122 0 0 1-.82-3.55C3.88 8.38 9.48 3.66 11.38 2.21c.37-.28.87-.28 1.23 0 .87.66 2.5 2.03 4.03 3.83.34.4.32 1-.05 1.37ZM20.1 13.91c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 0 1-4.81-1.58c-.49-.36-.53-1.08-.1-1.51L17.16 8.84c.47-.47 1.26-.37 1.58.21.82 1.51 1.37 3.15 1.36 4.86Z"
    />
  </svg>
);
export default SvgDrop;
