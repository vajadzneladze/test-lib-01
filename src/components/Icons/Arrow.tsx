import * as React from "react";
import { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 14.75c-.41 0-.75-.34-.75-.75v-3c0-4.27 3.48-7.75 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.45 0-6.25 2.8-6.25 6.25v3c0 .41-.34.75-.75.75Z"
    />
    <path
      fill="#555F62"
      d="M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c4.27 0 7.75 3.48 7.75 7.75v3c0 .41-.34.75-.75.75Z"
    />
    <path
      fill="#555F62"
      d="M4 6.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.06 4l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM20 6.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L20.94 4l-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
    />
  </svg>
);
export default SvgArrow;