import * as React from "react";
import { SVGProps } from "react";
const SvgDislike = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.61 5.5v10.16c0 .4-.12.79-.34 1.12l-2.73 4.06c-.43.65-1.5 1.11-2.41.77-.98-.33-1.63-1.43-1.42-2.41l.52-3.27c.04-.3-.04-.57-.21-.78a.93.93 0 0 0-.69-.31H4.22c-.79 0-1.47-.32-1.87-.88-.38-.54-.45-1.24-.2-1.95l2.46-7.49c.31-1.24 1.66-2.25 3-2.25h3.9c.67 0 1.61.23 2.04.66l1.28.99a2 2 0 0 1 .78 1.58ZM18.79 17.61h1.03c1.55 0 2.18-.6 2.18-2.08V5.48C22 4 21.37 3.4 19.82 3.4h-1.03c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.47.63 2.07 2.18 2.07Z"
    />
  </svg>
);
export default SvgDislike;
