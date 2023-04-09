import * as React from "react";
import { SVGProps } from "react";
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 16.01c.55 0 1 .45 1 1V18c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4v-.99c0-.55.45-1 1-1h12ZM19 6v7.5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4ZM3 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75ZM21 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75Z"
    />
  </svg>
);
export default SvgSlider;
