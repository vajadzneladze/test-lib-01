import * as React from "react";
import { SVGProps } from "react";
const SvgHeartEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23A5.549 5.549 0 0 0 7.56 3.1C4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Zm-1.6 8.28-3.54 3.54c-.14.14-.4.27-.59.3l-1.35.18c-.49.07-.83-.27-.76-.76l.19-1.35c.03-.19.16-.46.3-.59l3.54-3.54c.61-.61 1.32-.9 2.22 0 .89.9.6 1.61-.01 2.22Z"
    />
  </svg>
);
export default SvgHeartEdit;
