import * as React from "react";
import { SVGProps } from "react";
const SvgHeartTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.2 12.4c-2.65 0-4.8 2.15-4.8 4.8 0 .9.25 1.75.7 2.47A4.768 4.768 0 0 0 17.2 22c1.75 0 3.28-.94 4.1-2.33.44-.72.7-1.57.7-2.47 0-2.65-2.15-4.8-4.8-4.8Zm2.38 4.17-2.56 2.36c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.18-1.18a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.67.67 2.03-1.88c.3-.28.78-.26 1.06.04.28.31.26.79-.04 1.07Z"
    />
    <path
      fill="#555F62"
      d="M22 8.73c0 1.19-.19 2.29-.52 3.31-.06.21-.31.27-.49.14a6.346 6.346 0 0 0-3.79-1.24c-3.47 0-6.3 2.83-6.3 6.3 0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81C2.19 11.02 2 9.92 2 8.73c0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z"
    />
  </svg>
);
export default SvgHeartTick;