import * as React from "react";
import { SVGProps } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.76 2c-.48 0-.86.38-.86.86v8.46h3.67L12 9.75a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.84 2.85c.29.29.29.77 0 1.06l-2.84 2.85c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.56-1.56H9.9v8.33c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S16.64 2 10.76 2ZM3.99 11.32c-.41 0-.75.34-.75.75s.34.75.75.75h5.9v-1.5h-5.9Z"
    />
  </svg>
);
export default SvgLogin;
