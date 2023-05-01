import * as React from "react";
import { SVGProps } from "react";
const SvgInfoCircleOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#555F62"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2ZM12 16v-5"
    />
    <path
      stroke="#555F62"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.005 8h-.009"
    />
  </svg>
);
export default SvgInfoCircleOutlined;
