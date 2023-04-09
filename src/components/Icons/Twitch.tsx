import * as React from "react";
import { SVGProps } from "react";
const SvgTwitch = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M20.5 2H5.04c-.33 0-.65.17-.83.45l-1.54 2.3a.99.99 0 0 0-.17.55V18c0 .55.45 1 1 1h2c.55 0 1 .45 1 1v1c0 .55.45 1 1 1h1.46c.33 0 .65-.17.83-.45l1.41-2.11c.19-.28.5-.45.83-.45h4.05c.27 0 .52-.11.71-.29l4.41-4.41a.99.99 0 0 0 .29-.71V3c.01-.55-.44-1-.99-1Zm-9.71 10.86c0 .32-.26.57-.57.57H9.08a.57.57 0 0 1-.57-.57V7.15c0-.32.26-.57.57-.57h1.14c.32 0 .57.26.57.57v5.71Zm5.71 0c0 .32-.26.57-.57.57h-1.14a.57.57 0 0 1-.57-.57V7.15c0-.32.26-.57.57-.57h1.14c.32 0 .57.26.57.57v5.71Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTwitch;
