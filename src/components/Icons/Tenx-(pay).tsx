import * as React from "react";
import { SVGProps } from "react";
const SvgTenxPay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5.79 10.71-1.84 1.84a.996.996 0 0 1-1.41 0L12 12l-2.54 2.54a.996.996 0 0 1-1.41 0L6.21 12.7a.996.996 0 0 1 0-1.41l1.84-1.84a.996.996 0 0 1 1.41 0L12 12l2.54-2.54a.996.996 0 0 1 1.41 0l1.84 1.84c.39.38.39 1.02 0 1.41Z"
    />
  </svg>
);
export default SvgTenxPay;
