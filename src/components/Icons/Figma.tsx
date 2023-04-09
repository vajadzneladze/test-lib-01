import * as React from "react";
import { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2ZM12 8.67H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33H12V8.67ZM12 15.33H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33S12 20.5 12 18.66v-3.33ZM12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2ZM15.33 8.67c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33S12 13.84 12 12s1.49-3.33 3.33-3.33Z"
    />
  </svg>
);
export default SvgFigma;
