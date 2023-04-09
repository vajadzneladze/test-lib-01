import * as React from "react";
import { SVGProps } from "react";
const SvgVolumeUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 11.25h-1.25V10c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25H18c-.41 0-.75.34-.75.75s.34.75.75.75h1.25V14c0 .41.34.75.75.75s.75-.34.75-.75v-1.25H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM14.02 3.78c-1.12-.62-2.55-.46-4.01.45L7.09 6.06c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H6.43c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63V7.41c0-1.72-.62-3.01-1.73-3.63Z"
    />
  </svg>
);
export default SvgVolumeUp;
