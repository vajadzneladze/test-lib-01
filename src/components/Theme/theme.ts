import { createGlobalStyle } from "styled-components";

import PrimaryFontFamily from "../../assets/fonts/bpg_nino_mtavruli_bold.ttf";
import UpGamingFont from "../../assets/fonts/helvetica_ultraLight.ttf";
import HelveticaUltraLight from "../../assets/fonts/helvetica_ultraLight.ttf";
import HelveticaThin from "../../assets/fonts/helvetica_thin.ttf";
import HelveticaLight from "../../assets/fonts/helvetica_light.ttf";
import HelveticaRegular from "../../assets/fonts/helvetica_regular.ttf";
import HelveticaMedium from "../../assets/fonts/helvetica_medium.ttf";
import HelveticaBold from "../../assets/fonts/helvetica_bold.ttf";
import CheckedIcon from '../../assets/icons/checked.svg';


declare module "styled-components" {
  export interface DefaultTheme {
    typography: any;
    size: any;
    color: any;
    mode?: any;
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
  mode: "day",
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
      brand_80: "#7580D9",
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
  mode: "night",
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
      positive_100: "#27B989",
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
      brand_80: "#808BDC",
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
  font-family: "Helvetica Neue UltraLight";
  src: url(${HelveticaUltraLight}) format('truetype');
}

@font-face {
  font-family: "Helvetica Neue Thin";
  src: url(${HelveticaThin}) format('truetype');
}


@font-face {
  font-family: "Helvetica Neue Light";
  src: url(${HelveticaLight}) format('truetype');
}


@font-face {
  font-family: "Helvetica Neue Regular";
  src: url(${HelveticaRegular}) format('truetype');
}


@font-face {
  font-family: "Helvetica Neue Medium";
  src: url(${HelveticaMedium}) format('truetype');
}


@font-face {
  font-family:  "Helvetica Neue Bold";
  src: url(${HelveticaBold}) format('truetype');
} 

    .dx-menu-base .dx-menu-item .dx-menu-item-content .dx-menu-item-text {
      font-family: ${({ theme }) => theme.typography.font.regular};
    }


    body  .bg-for-stories-light {
      background-color: white;
      width:1080px;
      padding:50px;
      margin-bottom:80px;
      display:flex;
      justify-content: left;
      min-height:400px;
    }

    body  .bg-for-stories-dark {
      background-color: #0F1215;
      width:1080px;
      padding:50px;
      display:flex;
      justify-content: left;
      min-height:400px;
    }



    
    .dx-dropdowneditor-overlay {


      /* .dx-state-focused {
        border:none !important;
      } */

      .dx-overlay-content {
        top: 38px !important;
        transform: translate(0px, 22px) !important;
         
        border: 1px solid ${({ theme }) =>
    theme.color.steel.grey_06} !important;
        box-shadow:0px 36px 40px -15px rgba(12, 43, 67, 0.05);
        border-radius:${({ theme }) => theme.size.radius.medium};
        background-color:  ${({ theme }) => theme.color.surface.surface_1};
        /* height:520px !important; */
        /* max-height: 520px !important;
        min-height:300px; */


        .dx-popup-content {
          padding-left:0px;
          padding-right:7px;
          padding-top:0px;
          position:relative;
          clear:both;
          max-height:450px !important;
          /* overflow:hidden; */

          

          .dx-treeview {

            height:calc(100% - 117px) !important;


                      
            .dx-scrollable-container {
              
              overflow-y: auto;

              &::-webkit-scrollbar {
                width: 2px;
                margin-right:10px;
              }

              &::-webkit-scrollbar-track {
                background: transparent;
              }

              &::-webkit-scrollbar-thumb {
                background: #7580d9;
                border-radius: ${({ theme }) => theme.size.radius.small};
                cursor: pointer;
                height: 50px;
              }



              .dx-scrollable-scrollbar {
                display:none;
              }

              .dx-empty-message{
                display:none;
              }
            }
          }

          .drop-down-apply-btn {
            background-color:  ${({ theme }) =>
    theme.color.surface.surface_1} !important;
            border-top: 1px solid ${({ theme }) => theme.color.steel.grey_06};
            height:117px;
            position:relative;
            margin:16px;
            clear:both;

            p {
              font-family: ${({ theme }) => theme.typography.font.medium};
              font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
              line-height: ${({ theme }) => theme.typography.lineHeight.md};
              color: ${({ theme }) => theme.color.text.primary};
              cursor:pointer;
            }

            button {
              width:100%;
            }
          }
        }
      }
    }





  .dx-checkbox {

    .dx-list-select-all-label {
      font-family: ${({ theme }) => theme.typography.font.regular};
    }
    

    &.dx-state-hover {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_20};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_80};
      }
    }

    &.dx-state-focused {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_20};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_120};
      }
    }
  }


  .dx-checkbox-checked {
    .dx-checkbox-icon {
      color: ${({ theme }) => theme.color.text.static_primary};
      background: ${({ theme }) => theme.color.semantic.positive_80};
      border: 1px solid ${({ theme }) => theme.color.semantic.positive_80};

      &::before {
        content: "";
        background-image: url( ${CheckedIcon as {}});
        background-repeat: no-repeat;
        width:100%;
        height:100%;
        background-position: center;
        background-size: 8px 7px;
        margin: 0px;
        padding:0px;
        padding-top: 2px;
        left: 0px;
        top: 0px;
        box-sizing: border-box;
      }
    }

    &.dx-state-hover {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_120};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_120};
      }
    } 

    &.dx-state-focused {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_80};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_120};
      }
    }
  }



  .dx-checkbox-indeterminate {

&.dx-state-hover {
  .dx-checkbox-icon {
    background: ${({ theme }) => theme.color.semantic.positive_80};
    border: 1px solid
      ${({ theme }) => theme.color.semantic.positive_80};
  }
}

&.dx-state-focused {
  .dx-checkbox-icon {
    background: ${({ theme }) => theme.color.semantic.positive_120};
    border: 1px solid
      ${({ theme }) => theme.color.semantic.positive_80};
  }
}

.dx-checkbox-icon {
  background: ${({ theme }) => theme.color.semantic.positive_120};
  border: 1px solid
    ${({ theme }) => theme.color.semantic.positive_120};

  &::before {
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    margin-top: 0px;
    margin-left: 0px;
    
    width: 8px;
    height: 2px;
    background-color: ${({ theme }) => theme.color.text.static_primary};
    border-radius: 1px;
  }
}
}




.dx-radiogroup {

.dx-collection {

    display:flex;
    gap:10px;
    flex-wrap: wrap;

    .dx-radiobutton {
        display:flex;
        gap:10px;

        .dx-radio-value-container {
            padding-right:0px;

            .dx-radiobutton-icon {
                transition:100ms;
                width: 18px; 
                height: 18px;
                box-sizing: border-box;
                position:relative;
                margin:0px;
                position:relative;

                &::before {
                    width:18px;
                    height:18px;
                    box-sizing: border-box;
                    background: ${({ theme }) => theme.color.steel.grey_05};
                    border: 1px solid ${({ theme }) => theme.color.steel.grey_09}; 

                    
                }

                .dx-radiobutton-icon-dot {
                    
                    width:12px;
                    height:12px;
                    border-radius:6px;
                    margin:0px;
                    top: 50%;
                    left: 50%;
                    position: absolute;
                    transform: translateY(-50%) translateX(-50%);
                    position:absolute;
                }

                &:hover {
                    &::before {
                        background: ${({ theme }) => theme.color.semantic.positive_20};
                        border: 1px solid ${({ theme }) => theme.color.semantic.positive_100}; 
                    }
                }

                &:active {
                    &::before {
                        background: ${({ theme }) => theme.color.semantic.positive_20};
                        border: 1px solid ${({ theme }) => theme.color.semantic.positive_120}; 
                    }
                }

                &:disabled {
                    &::before {
                        background: #F3F5F6;
                        border: 1px solid #E9EBEC; 
                    }
                }


                &.dx-radiobutton-icon-checked {


                    &::before {
                        border: 1px solid ${({ theme }) => theme.color.semantic.positive_100}; 
                        background:none ;
                     
                    }

                    .dx-radiobutton-icon-dot {
                        background: ${({ theme }) => theme.color.semantic.positive_100};
                    }


                    &:hover {

                        &::before {
                            background: ${({ theme }) => theme.color.semantic.positive_10};
                        }
                    }


                    &:active {

                        &::before {
                            background: ${({ theme }) => theme.color.semantic.positive_10};
                            border: 1px solid ${({ theme }) => theme.color.semantic.positive_120}; 

                        }

                        .dx-radiobutton-icon-dot {
                            background: ${({ theme }) => theme.color.semantic.positive_120};
                        }

                    }

                }
            }
        }
        
        .dx-item-content {
            color: ${({ theme }) => theme.color.text.primary};
            font-family: ${({ theme }) => theme.typography.font.regular};
            text-align: left;
            font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
            line-height: ${({ theme }) => theme.typography.lineHeight.md};

        }
    }
}


&.dx-state-disabled {

    .dx-radiobutton-icon {
        &::before {
            background: #F3F5F6 !important;
            border: 1px solid #E9EBEC !important; 
        }
    }


    .dx-radiobutton-checked { 


        .dx-radiobutton-icon {
            &::before {
                background: #F9FAFA;
                border: 1px solid #E1E4E5; 

                background:red;
            }


            .dx-radiobutton-icon-dot {
                background: #E1E4E5 !important;
            }
        }
    }
}



}

`;
