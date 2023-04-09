import * as React from "react";
import { SVGProps } from "react";
const SvgCreativeCommons = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM8.99 14.12c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06a3.621 3.621 0 1 1-2.39-6.34c.88 0 1.72.32 2.39.9.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.14 2.14 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24Zm7 0c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06a3.621 3.621 0 1 1-2.39-6.34c.88 0 1.72.32 2.39.9.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24Z"
    />
  </svg>
);
export default SvgCreativeCommons;
