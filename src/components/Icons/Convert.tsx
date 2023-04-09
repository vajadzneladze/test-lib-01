import * as React from "react";
import { SVGProps } from "react";
const SvgConvert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#555F62"
      d="M13.03 2.03c-1.95 0-3.77.56-5.3 1.52l6.86 6.87.01-2.74a.749.749 0 1 1 1.5 0l-.01 4.55c0 .31-.19.58-.47.69-.09.04-.19.06-.28.06a.75.75 0 0 1-.53-.22l-8.19-8.2a1.06 1.06 0 0 1-.1-.12 9.984 9.984 0 0 0-3.49 7.59c0 5.52 4.48 10 10 10 1.95 0 3.77-.56 5.3-1.52l-6.86-6.87-.01 2.74a.749.749 0 1 1-1.5 0l.01-4.55c0-.31.19-.58.47-.69.27-.12.6-.06.81.16l8.19 8.2c.04.04.07.08.1.12a9.984 9.984 0 0 0 3.49-7.59c0-5.52-4.48-10-10-10Z"
    />
  </svg>
);
export default SvgConvert;
