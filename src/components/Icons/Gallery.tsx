import * as React from "react";
import { SVGProps } from "react";
const SvgGallery = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.58 19.01-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98ZM9 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z"
    />
    <path
      fill="#555F62"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v4.8l-.13-.11Z"
    />
  </svg>
);
export default SvgGallery;
