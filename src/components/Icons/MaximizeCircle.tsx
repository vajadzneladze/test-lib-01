import * as React from "react";
import { SVGProps } from "react";
const SvgMaximizeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.69 2.71a.782.782 0 0 0-.41-.41.868.868 0 0 0-.28-.05h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19l-4.72 4.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l4.72-4.72V7c0 .41.34.75.75.75s.75-.34.75-.75V3c0-.1-.02-.19-.06-.29ZM8.47 14.47l-4.72 4.72V17c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.08.03.18.05.28.05h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.81l4.72-4.72c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0ZM2.2 14.75c-.35 0-.66-.25-.73-.6-.14-.7-.22-1.43-.22-2.15C1.25 6.07 6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.59.88-.08.41-.49.66-.88.59-.63-.13-1.25-.19-1.88-.19-5.1 0-9.25 4.15-9.25 9.25 0 .62.06 1.25.19 1.85.08.41-.18.8-.59.88-.05.02-.1.02-.15.02ZM12 22.75c-.73 0-1.46-.07-2.17-.22a.75.75 0 0 1-.59-.88c.08-.41.49-.66.88-.59.61.12 1.24.19 1.87.19 5.1 0 9.25-4.15 9.25-9.25 0-.62-.06-1.24-.18-1.85-.08-.41.18-.8.59-.88.41-.08.8.18.88.59.14.7.21 1.42.21 2.14.01 5.93-4.81 10.75-10.74 10.75Z"
    />
  </svg>
);
export default SvgMaximizeCircle;
