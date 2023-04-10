import * as React from "react";
import { SVGProps } from "react";
const SvgMusicnote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.72 6.28v1.17c0 .98-.39 1.82-1.08 2.31-.43.32-.96.47-1.51.47-.34 0-.68-.05-1.03-.17l-5.38-1.79V18c0 2.62-2.13 4.75-4.75 4.75S3.22 20.62 3.22 18s2.13-4.75 4.75-4.75c1.26 0 2.4.5 3.25 1.3V4c0-.97.4-1.81 1.09-2.31.69-.49 1.61-.6 2.53-.3l4.42 1.48c1.36.45 2.46 1.98 2.46 3.41Z"
    />
  </svg>
);
export default SvgMusicnote;