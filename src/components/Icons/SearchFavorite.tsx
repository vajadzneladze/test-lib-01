import * as React from "react";
import { SVGProps } from "react";
const SvgSearchFavorite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 1.99c-4.97 0-9.01 4.04-9.01 9.01s4.04 9.01 9.01 9.01 9.01-4.04 9.01-9.01S15.97 1.99 11 1.99Zm3.18 9.57c-.56 1.78-2.51 2.75-3.18 2.75-.69 0-2.6-.93-3.18-2.75-.38-1.19.05-2.74 1.41-3.17.62-.2 1.28-.08 1.77.29.48-.37 1.15-.49 1.78-.29 1.35.44 1.78 1.99 1.4 3.17ZM21.99 18.95c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79-.36.5-.44 1.17-.22 1.84.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15Z"
    />
  </svg>
);
export default SvgSearchFavorite;
