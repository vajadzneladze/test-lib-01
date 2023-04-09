import * as React from "react";
import { SVGProps } from "react";
const SvgLocationCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.62 8.7C19.58 4.07 15.54 2 12 2h-.01C8.46 2 4.43 4.07 3.38 8.69c-1.18 5.16 1.98 9.53 4.84 12.29A5.436 5.436 0 0 0 12 22.51c1.36 0 2.72-.51 3.77-1.53 2.86-2.76 6.02-7.12 4.85-12.28Zm-6.09 4.79c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.45-1.45-1.49 1.49c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.49-1.49-1.45-1.45a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.45 1.45 1.4-1.4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.4 1.4 1.45 1.45c.29.29.29.76 0 1.06Z"
    />
  </svg>
);
export default SvgLocationCross;
