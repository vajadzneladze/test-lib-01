import * as React from "react";
import { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3.75h1.25V8.5c0 .41.34.75.75.75s.75-.34.75-.75V3.75H14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75ZM14 20.25h-1.25V15.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.75H10c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM2.83 9.88c.12.07.25.1.37.1.26 0 .51-.13.65-.38l.63-1.08L8.6 10.9c.11.07.24.1.37.1.26 0 .51-.13.65-.38.21-.35.08-.81-.27-1.02L5.23 7.22l.62-1.08c.21-.36.08-.82-.27-1.02a.738.738 0 0 0-1.02.27l-2 3.46a.75.75 0 0 0 .27 1.03ZM21.17 14.12a.738.738 0 0 0-1.02.27l-.63 1.08-4.12-2.37a.746.746 0 0 0-.75 1.29l4.11 2.38-.62 1.08a.746.746 0 0 0 .64 1.12c.26 0 .51-.13.65-.38l2-3.46c.22-.35.1-.8-.26-1.01ZM18.77 7.22 14.65 9.6c-.36.21-.48.67-.27 1.02.14.24.39.38.65.38.13 0 .26-.03.37-.1l4.11-2.38.63 1.08c.14.24.39.38.65.38.13 0 .26-.03.37-.1.36-.21.48-.67.27-1.02l-2-3.46a.742.742 0 0 0-1.02-.27c-.36.21-.48.67-.27 1.02l.63 1.07ZM5.23 16.78l4.11-2.38c.36-.21.48-.67.27-1.02a.742.742 0 0 0-1.02-.27l-4.11 2.38-.63-1.08a.742.742 0 0 0-1.02-.27c-.36.21-.48.67-.27 1.02l2 3.46c.14.24.39.38.65.38.13 0 .26-.03.37-.1.36-.21.48-.67.27-1.02l-.62-1.1Z"
    />
    <path
      fill="#555F62"
      d="M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5Z"
    />
  </svg>
);
export default SvgSun;