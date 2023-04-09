import * as React from "react";
import { SVGProps } from "react";
const SvgRecord = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.63 7.24c.3.47.14 1.1-.34 1.39l-.59.35-13.11 7.86c-.48.29-1.11.13-1.39-.36-1-1.74-1.45-3.86-1.06-6.08.66-3.77 3.76-6.77 7.55-7.31a9.003 9.003 0 0 1 8.94 4.15ZM20.89 13.43c-.68 4.25-4.44 7.5-8.75 7.57-1.9.03-3.66-.52-5.12-1.51-.62-.41-.6-1.33.04-1.71l12.41-7.29c.65-.38 1.45.06 1.51.81.05.7.02 1.41-.09 2.13Z"
    />
  </svg>
);
export default SvgRecord;
