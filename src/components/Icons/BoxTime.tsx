import * as React from "react";
import { SVGProps } from "react";
const SvgBoxTime = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.6 5.31-5.65-3.04a2.02 2.02 0 0 0-1.91 0L4.4 5.31c-.41.23-.67.67-.67 1.15 0 .49.25.93.67 1.15l5.65 3.04a2 2 0 0 0 1.9 0l5.65-3.04c.41-.22.67-.66.67-1.15 0-.48-.26-.92-.67-1.15ZM9.12 11.71 3.87 9.09A1.286 1.286 0 0 0 2 10.24v4.96c0 .86.48 1.63 1.25 2.02l5.25 2.62c.18.09.38.14.58.14.23 0 .47-.07.68-.19.38-.24.61-.65.61-1.1v-4.96c-.01-.86-.49-1.63-1.25-2.02ZM20 10.24v2.46c-.48-.14-.99-.2-1.5-.2-1.36 0-2.69.47-3.74 1.31-1.44 1.13-2.26 2.84-2.26 4.69 0 .49.06.98.19 1.45-.15-.02-.3-.08-.44-.17-.38-.23-.61-.64-.61-1.09v-4.96c0-.86.48-1.63 1.24-2.02l5.25-2.62A1.286 1.286 0 0 1 20 10.24Z"
    />
    <path
      fill="#555F62"
      d="M21.98 15.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5c0 1.41.64 2.66 1.65 3.48.77.64 1.77 1.02 2.85 1.02 1.14 0 2.17-.43 2.97-1.12A4.52 4.52 0 0 0 23 18.5c0-1.08-.38-2.08-1.02-2.85Zm-2.45 3.13c0 .26-.14.51-.36.64l-1.41.84c-.12.07-.25.11-.39.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l1.04-.62V17.1c0-.41.34-.75.75-.75s.75.34.75.75v1.68Z"
    />
  </svg>
);
export default SvgBoxTime;