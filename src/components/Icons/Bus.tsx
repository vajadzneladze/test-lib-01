import * as React from "react";
import { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 13.5v5.4C4 20.6 5.39 22 7.1 22h9.8c1.7 0 3.1-1.39 3.1-3.1v-5.4c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5Zm4.88 4.88c-.23.24-.55.37-.88.37-.08 0-.16-.01-.24-.02-.08-.02-.16-.04-.24-.08a1.39 1.39 0 0 1-.21-.11c-.07-.05-.14-.1-.19-.16-.24-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.05-.06.12-.11.19-.16.06-.04.14-.08.21-.11.08-.04.16-.06.24-.08.4-.08.83.06 1.12.35.24.23.37.55.37.88 0 .33-.13.65-.37.88Zm8 0c-.05.06-.12.11-.19.16-.06.04-.14.08-.21.11-.08.04-.16.06-.23.08-.09.01-.17.02-.25.02-.08 0-.16-.01-.24-.02-.08-.02-.16-.04-.24-.08a1.39 1.39 0 0 1-.21-.11c-.07-.05-.14-.1-.19-.16-.24-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.05-.06.12-.11.19-.16.06-.04.14-.08.21-.11.08-.04.16-.06.24-.08.16-.03.32-.03.49 0 .07.02.15.04.23.08.07.03.15.07.21.11.07.05.14.1.19.16.24.23.37.55.37.88 0 .33-.13.65-.37.88ZM16.9 2H7.1C5.39 2 4 3.39 4 5.1v2.4c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V5.1C20 3.39 18.61 2 16.9 2Zm-2.4 3.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.5 12h-15c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5Z"
    />
  </svg>
);
export default SvgBus;