import * as React from "react";
import { SVGProps } from "react";
const SvgLink1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.41 18.59c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73 2.82 0 5.12-2.3 5.12-5.12 0-2.82-2.3-5.12-5.12-5.12a5.13 5.13 0 0 0-5.12 5.12c0 .4-.33.73-.73.73-.4 0-.73-.33-.73-.73 0-3.63 2.95-6.59 6.59-6.59C19.06 5.42 22 8.37 22 12s-2.95 6.59-6.59 6.59Z"
    />
    <path
      fill="#555F62"
      d="M8.59 5.41c.4 0 .73.33.73.73 0 .4-.33.73-.73.73a5.13 5.13 0 0 0-5.12 5.12c0 2.82 2.3 5.12 5.12 5.12 2.82 0 5.12-2.3 5.12-5.12 0-.4.33-.73.73-.73.4 0 .73.33.73.73 0 3.63-2.95 6.59-6.59 6.59C4.94 18.58 2 15.63 2 12s2.95-6.59 6.59-6.59Z"
    />
  </svg>
);
export default SvgLink1;
