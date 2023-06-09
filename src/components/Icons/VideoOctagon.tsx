import * as React from "react";
import { SVGProps } from "react";
const SvgVideoOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.51 5.85-5.94-3.43c-.97-.56-2.17-.56-3.15 0L4.49 5.85a3.15 3.15 0 0 0-1.57 2.73v6.84c0 1.12.6 2.16 1.57 2.73l5.94 3.43c.97.56 2.17.56 3.15 0l5.94-3.43a3.15 3.15 0 0 0 1.57-2.73V8.58a3.192 3.192 0 0 0-1.58-2.73Zm-5.26 7.55-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4v-2.4c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8Z"
    />
  </svg>
);
export default SvgVideoOctagon;
