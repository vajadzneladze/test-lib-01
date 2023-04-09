import * as React from "react";
import { SVGProps } from "react";
const SvgSidebarRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.81 2c-1.49 0-2.73.36-3.68 1.05-.42.29-.79.66-1.08 1.08C2.36 5.08 2 6.32 2 7.81v8.38C2 19.83 4.17 22 7.81 22h7.47V2H7.81Zm4.31 10.53-2.56 2.56c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L10.52 12 8.5 9.97c-.3-.29-.3-.77 0-1.06.3-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06ZM16.78 2.03v19.95c1.23-.08 2.27-.43 3.09-1.03.42-.29.79-.66 1.08-1.08.69-.95 1.05-2.19 1.05-3.68V7.81c0-3.44-1.94-5.57-5.22-5.78Z"
    />
  </svg>
);
export default SvgSidebarRight;
