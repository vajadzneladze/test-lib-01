import * as React from "react";
import { SVGProps } from "react";
const SvgSize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.97 5.5v4c0 1.761-1.3 3.223-3.002 3.465-.273.039-.498-.189-.498-.465v-.25c0-3.72-3.02-6.75-6.75-6.75h-.25c-.276 0-.504-.225-.465-.498A3.505 3.505 0 0 1 14.47 2h4c1.94 0 3.5 1.57 3.5 3.5Z"
    />
    <path
      fill="#555F62"
      d="M11.72 7H6.97c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25Z"
    />
  </svg>
);
export default SvgSize;
