import * as React from "react";
import { SVGProps } from "react";
const SvgMainComponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.51 5.01-1.96-1.96c-1.4-1.4-3.7-1.4-5.1 0L7.49 5.01c-.39.39-.39 1.03 0 1.42l3.81 3.81c.39.39 1.02.39 1.41 0l3.81-3.81c.38-.39.38-1.03-.01-1.42ZM5.01 7.49 3.05 9.45c-1.4 1.4-1.4 3.7 0 5.1l1.96 1.96c.39.39 1.02.39 1.41 0l3.81-3.81a.996.996 0 0 0 0-1.41l-3.8-3.8c-.39-.39-1.03-.39-1.42 0ZM20.95 9.45l-1.96-1.96a.996.996 0 0 0-1.41 0l-3.81 3.81a.996.996 0 0 0 0 1.41l3.81 3.81c.39.39 1.02.39 1.41 0l1.96-1.96c1.4-1.41 1.4-3.71 0-5.11ZM7.49 18.99l1.96 1.96c1.4 1.4 3.7 1.4 5.1 0l1.96-1.96a.996.996 0 0 0 0-1.41l-3.81-3.81a.996.996 0 0 0-1.41 0l-3.81 3.81c-.38.38-.38 1.02.01 1.41Z"
    />
  </svg>
);
export default SvgMainComponent;
