import * as React from "react";
import { SVGProps } from "react";
const SvgDollarSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 8.08v2.86l-1.01-.35c-.51-.18-.82-.35-.82-1.22 0-.71.53-1.29 1.18-1.29h.65ZM14.58 14.63c0 .71-.53 1.29-1.18 1.29h-.65v-2.86l1.01.35c.51.18.82.35.82 1.22Z"
    />
    <path
      fill="#555F62"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-1.93 10c.78.27 1.82.84 1.82 2.63 0 1.54-1.2 2.79-2.68 2.79h-.65V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.58h-.36c-1.64 0-2.97-1.39-2.97-3.09a.749.749 0 1 1 1.5 0c0 .88.66 1.59 1.47 1.59h.36v-3.39L9.74 12c-.78-.27-1.82-.84-1.82-2.63 0-1.54 1.2-2.79 2.68-2.79h.65V6c0-.41.34-.75.75-.75s.75.34.75.75v.58h.36c1.64 0 2.97 1.39 2.97 3.09a.749.749 0 1 1-1.5 0c0-.88-.66-1.59-1.47-1.59h-.36v3.39l1.51.53Z"
    />
  </svg>
);
export default SvgDollarSquare;
