import * as React from "react";
import { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 21.25h-1V9.98c0-.62-.28-1.2-.77-1.58L19 7.44l-.02-2.45c0-.55-.45-.99-1-.99h-3.41l-1.34-1.04c-.72-.57-1.74-.57-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-15.5-8.5v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1Zm8 8.5h-5V18.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2.75Zm3-8.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5Z"
    />
  </svg>
);
export default SvgHouse;