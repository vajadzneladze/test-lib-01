import styled from "styled-components";
import { StyledDropDownProps, size } from "./DropDown.types";
import closeBtnDay from '../../assets/icons/close-circle-outlined.svg'
import closeBtnNight from '../../assets/icons/close-circle-outlined-night.svg'
import ArrowUp from '../../assets/icons/arrow-up-outlined.svg';
import ArrowUpDark from '../../assets/icons/arrow-up-outlined-dark.svg';
import ArrowDown from '../../assets/icons/arrow-down-outlined.svg';
import ArrowDownDark from '../../assets/icons/arrow-down-outlined-dark.svg';

export const getHeight = (size: size) => {
    switch (size) {
        case "xs":
            return "36px";
        case "sm":
            return "42px";
        case "md":
            return "48px";
        case "lg":
            return "56px";
        default:
            return "48px";
    }
};

export const getInputFontSize = (size: size) => {
    switch (size) {
        case "xs":
            return "12px ";
        case "sm":
            return "12px";
        case "md":
            return "14px";
        case "lg":
            return "14px";
        default:
            return "14px";
    }
};


const getInputFontSizes = (size: size, theme: any) => {
    switch (size) {
        case 'xs':
            return `
          font-size: ${theme.typography.fontSize.fs_12} !important;
          line-height: ${theme.typography.lineHeight.sm} !important;
          min-height:10px;
          height: 18px;
          top: 14px;

        `;
        case 'sm':
            return `
            font-size: ${theme.typography.fontSize.fs_12} !important;
            line-height: ${theme.typography.lineHeight.md} !important;
            min-height:10px;
            height: 20px;
            top: 18px;            
        `;
        case 'md':
            return `
            font-size: ${theme.typography.fontSize.fs_14} !important;
            line-height: ${theme.typography.lineHeight.md} !important;
            height: 24px;
            min-height:10px;
            top: 21px;           
            `;
        case 'lg':
            return `
            font-size: ${theme.typography.fontSize.fs_14} !important;
            line-height: ${theme.typography.lineHeight.sm} !important;
            height: 34px;
            top: 20px;        
            `;
        default:
            return '';
    }
};


const getInputLabelSizes = (size: size, theme: any) => {
    switch (size) {
        case 'xs':
            return `
          font-size: ${theme.typography.fontSize.fs_10} !important;
          line-height: ${theme.typography.lineHeight.sm} !important;
          transform: translate(0px, 3px) !important;
        `;
        case 'sm':
            return `
            font-size: ${theme.typography.fontSize.fs_10} !important;
            line-height: ${theme.typography.lineHeight.md} !important;
            transform: translate(0px, 1px) !important;
        `;
        case 'md':
            return `
            font-size: ${theme.typography.fontSize.fs_12} !important;
            line-height: ${theme.typography.lineHeight.md} !important;
            transform:translate(0px,1px) !important;

        `;
        case 'lg':
            return `
            font-size: ${theme.typography.fontSize.fs_12} !important;
            line-height: ${theme.typography.lineHeight.md} !important;
            transform: translate(0px, 4px) !important;

        `;
        default:
            return '';
    }
};

const getEmptyInputLabelSizes = (size: size, theme: any) => {
    switch (size) {
        case 'xs':
            return `
          font-size: ${theme.typography.fontSize.fs_12} !important;
          line-height: ${theme.typography.lineHeight.sm} !important;

        `;
        case 'sm':
            return `
            font-size: ${theme.typography.fontSize.fs_12} !important;
            line-height: ${theme.typography.lineHeight.md} !important;
        `;
        case 'md':
            return `
            font-size: ${theme.typography.fontSize.fs_14} !important;
            line-height: ${theme.typography.lineHeight.md} !important;
        `;
        case 'lg':
            return `
            font-size: ${theme.typography.fontSize.fs_14} !important;
            line-height: ${theme.typography.lineHeight.sm} !important;
        `;
        default:
            return '';
    }
};


export const StyledDropDown = styled.div<StyledDropDownProps>`

    
    .selections {
        position:absolute;
        width:20px;
        height: 20px;
        color:#00ADEE;
        font-family: ${({ theme }) => theme.typography.font.regular};
        font-size: ${({ theme }) => theme.typography.fontSize.fs_12} !important;
              line-height: ${({ theme }) => theme.typography.lineHeight.sm} !important;        
              z-index:99;
        margin-left:16px;
        bottom: 2px;
        right: 72px;
        padding-left: 5px;
        background-color:${({ theme, status }) => theme.color.surface[status === 'disabled' ? 'surface_0' : 'surface_1']};

    }


    width:100%;
    position:relative;
    box-sizing:border-box;
    border-radius:4px;
    height: ${({ size }) => getHeight(size)};
    border: 1px solid 
    ${({ status }) => {
        switch (status) {
            case "success":
                return ({ theme }) => theme.color.semantic.positive_100;
            case "disabled":
                return ({ theme }) => theme.color.steel.grey_08;
            case "error":
                return ({ theme }) => theme.color.semantic.negative_100;
            default:
                return ({ theme }) => theme.color.steel.grey_09;
        }
    }};


    &:hover {
        border: 1px solid 
        ${({ status }) => {
            switch (status) {
                case "success":
                    return ({ theme }) => theme.color.semantic.positive_100;
                case "disabled":
                    return ({ theme }) => theme.color.steel.grey_08;
                case "error":
                    return ({ theme }) => theme.color.semantic.negative_100;
                default:
                    return ({ theme }) => theme.color.steel.grey_11;
            }
        }};
    }


    .dx-dropdownbox {
        position:relative;
        height:100%;
        opacity:1;
        margin-top:0px;
        box-sizing:border-box;
        outline:0px;
        box-shadow: none;
        background-color:${({ theme, status }) => theme.color.surface[status === 'disabled' ? 'surface_0' : 'surface_1']};

       

        &.dx-editor-outlined {
            border:none !important;
        }
        
        
        .dx-dropdowneditor-input-wrapper {
            .dx-texteditor-container {
                .dx-texteditor-input-container {
                    position:relative;
                    box-sizing:border-box;
                 
                   input {
                        color: ${({ theme }) => theme.color.text.primary};
                        position:relative;
                        padding:0px 16px;
                       
                        ${({ theme, size }) => getInputFontSizes(size, theme)};
                        font-family: ${({ theme }) => theme.typography.font.regular};
                   }
                }
            }

            .dx-texteditor-buttons-container {

                .dx-clear-button-area {
                    display:flex;
                    justify-content: end;

                    .dx-icon-clear {
                        padding:0px;
                        display:flex;
                        align-items:center;
                        justify-content: end;
                        width:16px; 

                        &::before {
                            content: "";
                            background-image: url(  ${({ theme }) => theme.mode === 'day' ? closeBtnDay as {} : closeBtnNight as {}} );
                            display: block;
                            width: 100%;
                            aspect-ratio: 1;
                            background-size: 15px;
                            overflow: hidden;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                    }
                }

                .dx-dropdowneditor-button {
                    padding:0px;
                    width:32px !important;
                    display:flex;

                    .dx-button-content {
                        background-image: url(  ${({ theme }) => theme.mode === 'day' ? ArrowDown as {} : ArrowDownDark as {}} );
                        background-size: 15px;
                        background-repeat: no-repeat;
                        background-position: center;
                    }

                    svg {
                        transform:translateY(2px)
                    }
                }
            }
        }

        .dx-texteditor-label {
            div {
                border-color:transparent !important;


                &.dx-label-before {
                    width:16px !important;
                }

                &.dx-label {
                    
                    padding-left:0px !important;
                    padding-right:0px !important;
                    margin-left:0px !important;
                    border-left:0px !important;

                    span {
                        color: ${({ theme }) => theme.color.text.seconday};

                        ${({ theme, size }) => getInputLabelSizes(size, theme)};
                        font-family: ${({ theme }) => theme.typography.font.regular};
                    }
                }
            }
        }

        &.dx-texteditor-empty:not(.dx-dropdowneditor-active) {
            .dx-texteditor-label {
                div {
                    &.dx-label {
                        span {
                            ${({ theme, size }) => getEmptyInputLabelSizes(size, theme)};
                            transform:translate(0px,0px) !important;
                        }
                    }
                }
            }


            &.dx-state-focused {
                .dx-texteditor-label {
                    div {
                        &.dx-label {
                            span {
                                ${({ theme, size }) => getInputLabelSizes(size, theme)};
                            }
                        }
                    }
                }
            }
        }

        &.dx-dropdowneditor-active {

            border:1px solid red;
            .dx-texteditor-buttons-container {

                .dx-dropdowneditor-button {
                    padding:0px;
                    width:32px !important;
                    display:flex;


                    .dx-button-content {
                        background-image: url(  ${({ theme }) => theme.mode === 'day' ? ArrowUp as {} : ArrowUpDark as {}} );
                    }
                }
            }
        }
    }

`;