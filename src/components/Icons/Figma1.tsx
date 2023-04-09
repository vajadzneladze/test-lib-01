import * as React from "react";
import { SVGProps } from "react";
const SvgFigma1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#555F62" d="M12 12c0-1.1.9-2 2-2h-2v2Z" />
    <path
      fill="#555F62"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4 10c0 1.1-.9 2-2 2s-2-.9-2-2v4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2h4c1.1 0 2 .9 2 2s-.9 2-2 2c1.1 0 2 .9 2 2Z"
    />
  </svg>
);
export default SvgFigma1;
