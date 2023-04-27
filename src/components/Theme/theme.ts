import { createGlobalStyle } from "styled-components";

import PrimaryFontFamily from '../../assets/fonts/bpg_nino_mtavruli_bold.ttf';
import UpGamingFont from '../../assets/fonts/helvetica_ultraLight.ttf';
import HelveticaUltraLight from '../../assets/fonts/helvetica_ultraLight.ttf';
import HelveticaThin from '../../assets/fonts/helvetica_thin.ttf';
import HelveticaLight from '../../assets/fonts/helvetica_light.ttf';
import HelveticaRegular from '../../assets/fonts/helvetica_regular.ttf';
import HelveticaMedium from '../../assets/fonts/helvetica_medium.ttf';
import HelveticaBold from '../../assets/fonts/helvetica_bold.ttf';

declare module "styled-components" {
  export interface DefaultTheme {
    typography: any;
    size: any;
    color: any;
  }
}

const typography = {
  fontFamily: "Helvetica Neue",
  font: {
    ultraLight: "Helvetica Neue UltraLight",
    thin: "Helvetica Neue Thin",
    light: "Helvetica Neue Light",
    regular: "Helvetica Neue Regular",
    medium: "Helvetica Neue Medium",
    bold: "Helvetica Neue Bold",
  },
  fontWeight: {
    ultraLight: "100",
    thin: "200 ",
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
  },
  fontSize: {
    fs_10: "10px",
    fs_12: "12px",
    fs_14: "14px",
    fs_16: "16px",
    fs_18: "18px",
    fs_24: "24px",
    fs_28: "28px",
    fs_32: "32px",
    fs_36: "36px",
    fs_44: "44px",
    fs_48: "48px",
    fs_56: "56px",
  },
  lineHeight: {
    sm: "1.5",
    md: "1.7",
    lg: "2",
  },
  align: {
    left: "left",
    right: "right",
    center: "center",
    justify: "justify",
  },
};

const size = {
  spacing: {
    s_1: "4px",
    s_2: "8px",
    s_3: "12px",
    s_4: "16px",
    s_5: "24px",
    s_6: "32px",
    s_7: "40px",
    s_8: "48px",
    s_9: "56px",
    s_10: "64px",
    s_11: "72px",
    s_12: "80px",
    s_13: "96px",
    s_14: "120px",
    s_15: "160px",
    s_16: "200px",
    s_17: "240px",
  },
  radius: {
    small: "2px",
    medium: "4px",
    large: "6px",
    circle: "1000px",
  },
  icon: {
    xs: "16px",
    sm: "18px",
    md: "20px",
    lg: "24px",
  },
};

export const lightTheme = {
  typography,
  size,
  color: {
    steel: {
      grey_00: "#FFFFFF",
      grey_005: "#F9FAFA",
      grey_01: "#F9FAFA",
      grey_02: "#F6F8F8",
      grey_03: "#F3F5F6",
      grey_04: "#EEF1F1",
      grey_05: "#E9EBEC",
      grey_06: "#E1E4E5",
      grey_07: "#D1D5D6",
      grey_08: "#BCC1C2",
      grey_09: "#A5AAAC",
      grey_10: "#899194",
      grey_11: "#6F787B",
      grey_12: "#555F62",
      grey_13: "#424A4D",
      grey_14: "#31383A",
      grey_15: "#2A3032",
      grey_16: "#23282A",
      grey_17: "#1E2224",
      grey_18: "#1A1E1F",
      grey_19: "#171B1C",
      grey_20: "#141719",
      grey_21: "#0F1215",
    },
    semantic: {
      positive_05: "#EDF8F4",
      positive_10: "#E2F4EE",
      positive_20: "#C9EEE2",
      positive_40: "#9DE1CB",
      positive_80: "#3FC699",
      positive_100: "#10B77F",
      positive_120: "#159E72",

      negative_05: "#F9F1F1",
      negative_10: "#FAEBEB",
      negative_20: "#F8D8D8",
      negative_40: "#F6B1B1",
      negative_80: "#F16A6A",
      negative_100: "#EF4343",
      negative_120: "#C63F3F",

      warning_05: "#F9F8F0",
      warning_10: "#F9F6E7",
      warning_20: "#F7EECF",
      warning_40: "#F4E1A4",
      warning_80: "#EEC64F",
      warning_100: "#EBB924",
      warning_120: "#C19C25",

    },
    surface: {
      surface_backdrop: "rgba(20, 23, 25, 0.5)",
      surface_minus_2: "#EEF1F1", // day/steelgrey/ 04
      surface_minus_1: "#F3F5F6", // day / steelgrey / 03
      surface_0: "#F9FAFA", // //day steel grey 01
      surface_1: "#FFFFFF", // day / steelgrey 00
      surface_2: "#F9FAFA ", // day steel grey 03
    },
    brand: {
      brand_80: "#7580D9"
    },
    text: {
      primary: "#15181A",
      seconday: "#566063",
      tertiary: "#6F787B",
      disabled: "#A6ABAD",
      static_primary: "rgba(255,255,255,1)",
      static_secondary: "rgba(255,255,255,0.85)",
      static_tertiary: "rgba(255,255,255,0.7)",
      static_disabled: "rgba(255,255,255,0.6)",
    },
  },
};

export const darkTheme = {
  typography,
  size,
  color: {
    steel: {
      grey_00: "#0F1215",
      grey_005: "#121517",
      grey_01: "#141719",
      grey_02: "#171B1C",
      grey_03: "#1A1E1F",
      grey_04: "#1E2224",
      grey_05: "#23282A",
      grey_06: "#2A3032",
      grey_07: "#31383A",
      grey_08: "#424A4D",
      grey_09: "#555F62",
      grey_10: "#6F787B",
      grey_11: "#899194",
      grey_12: "#A5AAAC",
      grey_13: "#BCC1C2",
      grey_14: "#D1D5D6",
      grey_15: "#E1E4E5",
      grey_16: "#E9EBEC",
      grey_17: "#EEF1F1",
      grey_18: "#F3F5F6",
      grey_19: "#F6F8F8",
      grey_20: "#F9FAFA",
      grey_21: "#FFFFFF",
    },
    semantic: {
      positive_05: "#232F2F",
      positive_10: "#243835",
      positive_20: "#25463E",
      positive_40: "#24604E",
      positive_80: "#269C75",
      positive_100: "#CEEDE3",
      positive_120: "#52C7A0",

      negative_05: "#2D2A2C",
      negative_10: "#362B2C",
      negative_20: "#4C2F30",
      negative_40: "#763739",
      negative_80: "#C84646",
      negative_100: "#EF4D4D",
      negative_120: "#F26E6E",

      warning_05: "#2C2E29",
      warning_10: "#383829",
      warning_20: "#4C452A",
      warning_40: "#726227",
      warning_80: "#C19C25",
      warning_100: "#EBB924",
      warning_120: "#EEC64F",
    },
    surface: {
      surface_backdrop: "rgba(20, 23, 25, 0.8)",
      surface_minus_2: "#171B1C", // night /steelgrey/ 02
      surface_minus_1: "#1A1E1F", // night / steelgrey / 03
      surface_0: "#23282A", // //night steel grey 05
      surface_1: "#31383A ", // night / steelgrey 06
      surface_2: "#F3F5F6 ", // night steel grey 0308
    },
    brand: {
      brand_80: "#808BDC"
    },
    text: {
      primary: "#F9FAFA",
      seconday: "#A5AAAC",
      tertiary: "#899194",
      disabled: "#6F787B",
      static_primary: "rgba(255,255,255,1)",
      static_secondary: "rgba(255,255,255,0.85)",
      static_tertiary: "rgba(255,255,255,0.7)",
      static_disabled: "rgba(255,255,255,0.6)",
    },
  },
};

export const GlobalStyles = createGlobalStyle`



@font-face {
  font-family: 'Helvetica Neue';
  src: url(${UpGamingFont}) format('truetype');
}


@font-face {
  font-family: ${({ theme }) => theme.typography.font.ultraLight};
  src: url(${HelveticaUltraLight}) format('truetype');
  /* font-weight: ${({ theme }) => theme.typography.fontWeight.ultraLight}; */
}

@font-face {
  font-family: ${({ theme }) => theme.typography.font.thin};
  src: url(${HelveticaThin}) format('truetype');
  /* font-weight: ${({ theme }) => theme.typography.fontWeight.thin}; */
}


@font-face {
  font-family: ${({ theme }) => theme.typography.font.light};
  src: url(${HelveticaLight}) format('truetype');
  /* font-weight: ${({ theme }) => theme.typography.fontWeight.light}; */
}


@font-face {
  font-family: ${({ theme }) => theme.typography.font.regular};
  src: url(${HelveticaRegular}) format('truetype');
  /* font-weight: ${({ theme }) => theme.typography.fontWeight.regular}; */
}


@font-face {
  font-family: ${({ theme }) => theme.typography.font.medium};
  src: url(${HelveticaMedium}) format('truetype');
  /* font-weight: ${({ theme }) => theme.typography.fontWeight.medium}; */
}


@font-face {
  font-family: ${({ theme }) => theme.typography.font.bold};
  src: url(${HelveticaBold}) format('truetype');
  /* font-weight: ${({ theme }) => theme.typography.fontWeight.bold}; */
}

    * {
      font-family: ${({ theme }) => theme.typography.font.regular};
    }


    .dx-menu-base .dx-menu-item .dx-menu-item-content .dx-menu-item-text {
      font-family: ${({ theme }) => theme.typography.font.regular};
    }


    body  .bg-for-stories-light {
      background-color: white;
      width:1080px;
      padding:50px;
      margin-bottom:80px;
    }

    body  .bg-for-stories-dark {
      background-color: #0F1215;
      width:1080px;
      padding:50px;
    }

    .dx-overlay-wrapper {
      /* transform: translate(17px, 19px) !important; */
    }
    
    .dx-dropdowneditor-overlay  {
      top: 11px !important;
    }
    .dx-popup-wrapper >  {
      .dx-overlay-content {
        top:38px !important;
        border: 1px solid #A5AAAC;
        border-top-width:1px !important;
        border-bottom-width:1px;
        box-shadow: 0px 36px 40px -15px rgba(12, 43, 67, 0.05);
        border-radius: 4px;
        transform: translate(0px, 3px) !important;

       .dx-scrollable-scrollbar {
        display:none;
       }

        .dx-list-item {
          padding:16px !important;
          background-color:#F9FAFA !important;

          &.dx-state-active {
            color: ${({ theme }) => theme.color.text.primary} !important;
          }

          &.dx-state-focused {
            color: ${({ theme }) => theme.color.text.primary} !important;
          }
        }
        .dx-popup-content {
          padding:0px !important;


          .dx-state-hover {
            background-color: white !important;
          }
        }


        .dx-list-item-selected {
          background-color: white  !important;
          box-shadow: inset 2px 0px 0px #10B77F !important;

          &:hover {
            background-color: #ECE8FE  !important;
          } 
        }
      } 


     
      .dx-list-item-selected {

      }
    }

`;
