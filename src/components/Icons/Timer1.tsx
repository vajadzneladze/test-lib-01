import * as React from "react";
import { SVGProps } from "react";
const SvgTimer1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4.65c-4.78 0-8.67 3.89-8.67 8.67C3.33 18.1 7.22 22 12 22c4.78 0 8.67-3.89 8.67-8.67 0-4.78-3.89-8.68-8.67-8.68Zm.75 8.35c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5ZM14.89 3.45H9.11c-.4 0-.72-.32-.72-.72 0-.4.32-.73.72-.73h5.78c.4 0 .72.32.72.72 0 .4-.32.73-.72.73Z"
    />
  </svg>
);
export default SvgTimer1;
