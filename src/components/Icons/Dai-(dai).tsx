import * as React from "react";
import { SVGProps } from "react";
const SvgDaiDai = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 7.75H8.75v1.5h6.46c-.78-.91-1.92-1.5-3.21-1.5ZM16.25 12c0-.44-.09-.85-.21-1.25H8.75v2.5h7.29c.12-.4.21-.81.21-1.25Z"
    />
    <path
      fill="#555F62"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm6.52 12.75h-1.47c-.98 1.79-2.87 3-5.05 3H8c-.41 0-.75-.34-.75-.75v-2.25h-.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.77v-2.5h-.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.77V7c0-.41.34-.75.75-.75h4c2.18 0 4.07 1.21 5.05 3h1.47c.41 0 .75.34.75.75s-.34.75-.75.75h-.91a5.7 5.7 0 0 1 0 2.5h.91c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
    <path
      fill="#555F62"
      d="M8.75 16.25H12c1.29 0 2.43-.59 3.21-1.5H8.75v1.5Z"
    />
  </svg>
);
export default SvgDaiDai;
