import * as React from "react";
import { SVGProps } from "react";
const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.06 9.27-3.53 3.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3.53-3.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3 3 3-3c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z"
    />
  </svg>
);
export default SvgArrowCircleDown;
