import * as React from "react";
import { SVGProps } from "react";
const SvgForwardItem = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.25 5.77V9c0 2.115-.708 2.899-2.62 3.007a.48.48 0 0 1-.5-.487v-1.14c0-3.12-1.39-4.51-4.51-4.51h-1.14a.48.48 0 0 1-.487-.5c.108-1.912.892-2.62 3.007-2.62h3.23c2.29 0 3.02.73 3.02 3.02Z"
    />
    <path
      fill="#555F62"
      d="M16.63 10.38v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01Z"
    />
    <path
      fill="#555F62"
      d="M11.52 18.13a.48.48 0 0 1 .487.5c-.108 1.912-.892 2.62-3.007 2.62H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.115.708-2.899 2.62-3.007a.48.48 0 0 1 .5.487v1.14c0 3.12 1.39 4.51 4.51 4.51h1.14Z"
    />
  </svg>
);
export default SvgForwardItem;
