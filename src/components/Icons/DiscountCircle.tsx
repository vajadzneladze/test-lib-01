import * as React from "react";
import { SVGProps } from "react";
const SvgDiscountCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM9 8c.55 0 1 .45 1 1s-.44 1-1 1c-.55 0-1-.45-1-1s.45-1 1-1Zm.53 7.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6ZM15 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1Z"
    />
  </svg>
);
export default SvgDiscountCircle;
