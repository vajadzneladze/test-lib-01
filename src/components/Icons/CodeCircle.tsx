import * as React from "react";
import { SVGProps } from "react";
const SvgCodeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM8.53 13.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 12l1.47 1.47Zm5.16-3.51-2 4.67a.752.752 0 0 1-.98.39.745.745 0 0 1-.39-.99l2-4.67c.16-.38.6-.56.98-.39.38.17.55.61.39.99Zm4.84 2.57-2 2c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L16.94 12l-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06Z"
    />
  </svg>
);
export default SvgCodeCircle;
