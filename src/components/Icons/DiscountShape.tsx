import * as React from "react";
import { SVGProps } from "react";
const SvgDiscountShape = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.53 10.87-1.52-1.52c-.26-.26-.47-.77-.47-1.13V6.06c0-.88-.72-1.6-1.6-1.6h-2.15c-.36 0-.87-.21-1.13-.47l-1.52-1.52c-.62-.62-1.64-.62-2.26 0L9.34 3.99c-.25.26-.76.47-1.13.47H6.06c-.88 0-1.6.72-1.6 1.6v2.15c0 .36-.21.87-.47 1.13l-1.52 1.52c-.62.62-.62 1.64 0 2.26l1.52 1.52c.26.26.47.77.47 1.13v2.15c0 .88.72 1.6 1.6 1.6h2.15c.36 0 .87.21 1.13.47l1.52 1.52c.62.62 1.64.62 2.26 0l1.52-1.52c.26-.26.77-.47 1.13-.47h2.15c.88 0 1.6-.72 1.6-1.6v-2.15c0-.36.21-.87.47-1.13l1.52-1.52c.65-.61.65-1.63.02-2.25ZM8 9c0-.55.45-1 1-1s1 .45 1 1-.44 1-1 1c-.55 0-1-.45-1-1Zm1.53 6.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6ZM15 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1Z"
    />
  </svg>
);
export default SvgDiscountShape;