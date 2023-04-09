import * as React from "react";
import { SVGProps } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.113 2C21.573 2 22 2.427 22 7.886v8.227c0 5.46-.427 5.887-5.887 5.887H7.887C2.426 22 2 21.573 2 16.113V7.887C2 2.426 2.428 2 7.886 2h8.227ZM8.515 17.5V9.364H5.986V17.5h2.529ZM7.25 8.2c.813 0 1.474-.66 1.474-1.474a1.475 1.475 0 0 0-2.948 0c0 .814.659 1.474 1.474 1.474ZM18 17.5v-4.463c0-2.19-.473-3.876-3.034-3.876-1.23 0-2.054.675-2.392 1.315h-.034V9.364h-2.425V17.5h2.527v-4.025c0-1.061.202-2.089 1.518-2.089 1.296 0 1.313 1.214 1.313 2.158V17.5H18Z"
    />
  </svg>
);
export default SvgLinkedin;
