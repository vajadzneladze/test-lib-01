import * as React from "react";
import { SVGProps } from "react";
const SvgGrid1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 2v5.8H2C2 4.19 4.15 2.02 7.75 2ZM22 7.8h-5.75V2c3.6.02 5.75 2.19 5.75 5.8ZM22 16.3c-.04 3.55-2.18 5.68-5.75 5.7v-5.7H22ZM7.75 16.3V22c-3.57-.02-5.71-2.15-5.75-5.7h5.75ZM7.75 9.3H2v5.5h5.75V9.3ZM22 9.3h-5.75v5.5H22V9.3ZM14.75 9.3h-5.5v5.5h5.5V9.3ZM14.75 2h-5.5v5.8h5.5V2ZM14.75 16.3h-5.5V22h5.5v-5.7Z"
    />
  </svg>
);
export default SvgGrid1;
