import * as React from "react";
import { SVGProps } from "react";
const SvgMinusCirlce = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm3.92 10.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 1 1 0 1.5Z"
    />
  </svg>
);
export default SvgMinusCirlce;
