import * as React from "react";
import { SVGProps } from "react";
const SvgOffer = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.469 11.622-8.1-8.1A1.789 1.789 0 0 0 11.1 3H4.8C3.81 3 3 3.81 3 4.8v6.3c0 .495.198.945.531 1.278l8.1 8.1c.324.324.774.522 1.269.522a1.76 1.76 0 0 0 1.269-.531l6.3-6.3A1.76 1.76 0 0 0 21 12.9c0-.495-.207-.954-.531-1.278ZM6.15 7.5c-.747 0-1.35-.603-1.35-1.35 0-.747.603-1.35 1.35-1.35.747 0 1.35.603 1.35 1.35 0 .747-.603 1.35-1.35 1.35Z"
    />
  </svg>
);
export default SvgOffer;
