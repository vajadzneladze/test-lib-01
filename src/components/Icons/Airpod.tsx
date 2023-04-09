import * as React from "react";
import { SVGProps } from "react";
const SvgAirpod = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.08 11.34H8.92c-.64 0-1.27-.26-1.72-.72-.14-.14-.26-.29-.36-.46-.18-.3-.5-.49-.85-.49H3.5c-.55 0-1 .45-1 1v6.83C2.5 19.99 4.51 22 7 22h10c2.49 0 4.5-2.01 4.5-4.5v-6.83c0-.55-.45-1-1-1H18c-.36 0-.68.2-.86.51a2.42 2.42 0 0 1-2.06 1.16ZM17 2H7C4.51 2 2.5 4.01 2.5 6.5v.67c0 .55.45 1 1 1H6c.36 0 .68-.2.86-.51A2.42 2.42 0 0 1 8.92 6.5h5.99c.61 0 1.49.32 1.91.75.13.13.23.27.33.42.18.3.5.5.86.5h2.5c.55 0 1-.45 1-1V6.5A4.509 4.509 0 0 0 17 2Z"
    />
  </svg>
);
export default SvgAirpod;
