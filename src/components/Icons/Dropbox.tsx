import * as React from "react";
import { SVGProps } from "react";
const SvgDropbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 6-5.56 4-3.25-2.2a.995.995 0 0 1-.02-1.64L7 3.4c.34-.24.8-.25 1.14-.02L12 6ZM20.81 7.8 17.56 10 12 6l3.86-2.61c.35-.23.8-.23 1.14.02l3.83 2.76c.57.4.56 1.24-.02 1.63ZM12 14l-4.44 3L5 15.16l-1.84-1.32c-.56-.41-.55-1.25.02-1.64L6.43 10 12 14Z"
    />
    <path
      fill="#555F62"
      d="M20.81 12.2c.58.39.59 1.23.02 1.64l-1.84 1.32L16.43 17l-4.44-3 5.56-4 3.26 2.2Z"
    />
    <path
      fill="#555F62"
      d="M18.68 17.34c.13-.1.32 0 .32.16v.73c0 .39-.23.74-.58.91l-6 2.77c-.27.12-.57.12-.84 0l-6-2.77c-.35-.17-.58-.52-.58-.91v-.73a.2.2 0 0 1 .32-.16l1.93 1.39c.17.12.4.13.57.01l3.9-2.64c.17-.11.39-.11.56 0l3.9 2.64c.17.12.4.11.57-.01l1.93-1.39Z"
    />
  </svg>
);
export default SvgDropbox;
