import * as React from "react";
import { SVGProps } from "react";
const SvgDiamonds = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.77 9.8-.8-1.8-1.76-3.96C18.74 3 18 2.15 16.3 2.15H7.7C6 2.15 5.26 3 4.79 4.04L3.03 8l-.8 1.8c-.46 1.05-.21 2.59.56 3.44l6.85 7.54c1.3 1.43 3.42 1.43 4.72 0l6.85-7.54c.77-.85 1.02-2.39.56-3.44Z"
    />
  </svg>
);
export default SvgDiamonds;
