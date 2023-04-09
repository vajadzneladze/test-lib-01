import * as React from "react";
import { SVGProps } from "react";
const SvgCardCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 15.7v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-.11c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2ZM2.5 17.31c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9Z"
    />
    <path
      stroke="#555F62"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
    />
    <path fill="#555F62" d="M18.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
  </svg>
);
export default SvgCardCoin;
