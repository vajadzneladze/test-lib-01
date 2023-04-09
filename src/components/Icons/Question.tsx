import * as React from "react";
import { SVGProps } from "react";
const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="#555F62" />
    <path
      fill="#555F62"
      d="M15.281 9.587a3.432 3.432 0 0 0-3.152-3.289 3.418 3.418 0 0 0-2.631.905 3.359 3.359 0 0 0-1.07 2.466c0 .453.37.823.823.823.452 0 .822-.37.822-.823 0-.48.192-.931.548-1.26.37-.343.864-.507 1.385-.466.89.068 1.603.822 1.63 1.713a1.679 1.679 0 0 1-.904 1.576 3.276 3.276 0 0 0-1.7 2.892c0 .452.37.822.823.822.452 0 .822-.37.822-.822 0-.617.316-1.179.836-1.453a3.359 3.359 0 0 0 1.768-3.084ZM13.088 16.618a1.096 1.096 0 1 1-2.193 0 1.096 1.096 0 0 1 2.193 0Z"
    />
  </svg>
);
export default SvgQuestion;
