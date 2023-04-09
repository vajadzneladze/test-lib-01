import * as React from "react";
import { SVGProps } from "react";
const SvgRedirect = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.489 17.733c0 .42-.336.756-.756.756H5.267a.752.752 0 0 1-.756-.756V5.267c0-.42.336-.756.756-.756h4.91V3h-4.91A2.257 2.257 0 0 0 3 5.267v12.466A2.257 2.257 0 0 0 5.267 20h12.466A2.257 2.257 0 0 0 20 17.733v-4.91h-1.511v4.91Z"
    />
    <path
      fill="#555F62"
      d="M11.576 3v1.773h5.395L10 11.743 11.256 13l6.97-6.97v5.394H20V3h-8.424Z"
    />
  </svg>
);
export default SvgRedirect;
