import * as React from "react";
import { SVGProps } from "react";
const SvgFrame2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#555F62" d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path
      fill="#555F62"
      d="M17.79 9.34a4.455 4.455 0 0 1-3.13-3.13c-.26-.96-.2-1.88.09-2.7a.99.99 0 0 0-.72-1.3c-1.47-.31-3.06-.3-4.72.15-3.78 1.06-6.67 4.33-7.21 8.22-.92 6.62 4.69 12.23 11.31 11.32 3.9-.54 7.16-3.43 8.21-7.22.46-1.65.47-3.24.16-4.72-.12-.58-.74-.91-1.3-.72-.81.29-1.73.35-2.69.1Z"
    />
  </svg>
);
export default SvgFrame2;
