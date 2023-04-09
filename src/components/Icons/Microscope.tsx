import * as React from "react";
import { SVGProps } from "react";
const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.84 10.9 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34l-5.66 3.79 3.2 4.77Z"
    />
    <path
      fill="#555F62"
      d="m14.52 10.42-1.76 1.18-2.67 1.79-.35.23-.16-.24-2.24-3.34-.16-.24 4.78-3.2 2.56 3.82Z"
    />
    <path
      fill="#555F62"
      d="m5.64 16.02 3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.46.92.58 1.38.27ZM16.56 21.81a.87.87 0 0 1-.31.07c-.29 0-.56-.17-.69-.45l-3.73-8.24-3.78 8.25a.77.77 0 0 1-.69.44.87.87 0 0 1-.31-.07.766.766 0 0 1-.37-1l3.41-7.42 2.67-1.79 4.17 9.22c.17.37 0 .82-.37.99Z"
    />
  </svg>
);
export default SvgMicroscope;
