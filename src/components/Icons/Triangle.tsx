import * as React from "react";
import { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.05 2.85-8.79 8.79c-.2.2-.2.51 0 .71l8.79 8.79c.32.31.85.09.85-.35V18.2a.47.47 0 0 0-.15-.35l-5.5-5.5c-.2-.2-.2-.51 0-.71l5.5-5.5a.51.51 0 0 0 .15-.35V3.2a.5.5 0 0 0-.85-.35ZM13.75 2.85l8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 0 1-.85-.35V18.2c0-.13.05-.26.15-.35l5.5-5.5c.2-.2.2-.51 0-.71l-5.5-5.5a.51.51 0 0 1-.15-.35V3.2a.5.5 0 0 1 .85-.35Z"
    />
    <path
      fill="#555F62"
      d="m10.05 9.85-1.79 1.79c-.2.2-.2.51 0 .71l1.79 1.79c.32.31.85.09.85-.35V10.2a.5.5 0 0 0-.85-.35Z"
    />
  </svg>
);
export default SvgTriangle;
