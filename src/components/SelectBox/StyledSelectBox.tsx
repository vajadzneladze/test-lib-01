import styled from "styled-components";
import { StyledSelectBoxProps, size, status } from "./SelectBox.types";
import closeBtnDay from '../../assets/icons/close-circle-outlined.svg'
import closeBtnNight from '../../assets/icons/close-circle-outlined.svg'

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
      return "42px";
  }
};


export const getInputFontSize = (size: size) => {
  switch (size) {
    case "xs":
      return "12px";
    case "sm":
      return "12px";
    case "md":
      return "14px";
    case "lg":
      return "14px";
    default:
      return "12px";
  }
};



export const getLabelFontSize = (size: size) => {
  switch (size) {
    case "xs":
      return "12px";
    case "sm":
      return "12px";
    case "md":
      return "14px";
    case "lg":
      return "14px";
    default:
      return "12px";
  }
};

export const getFocusedLabelFontSize = (size: size) => {
  switch (size) {
    case "xs":
      return "10px";
    case "sm":
      return "10px";
    case "md":
      return "12px";
    case "lg":
      return "12px";
    default:
      return "10px";
  }
};




export const getLabelLineHeight = (size: size) => {
  switch (size) {
    case "xs":
      return 'sm';
    case "sm":
      return "md";
    case "md":
      return "md";
    case "lg":
      return "md";
    default:
      return "md";
  }
};






export const SelectBoxContainer = styled.div<StyledSelectBoxProps>`

  .dx-overlay-content {
    margin-top:200px !important;
  }

  position: relative;
  width: 100%;
  height: ${({ size }) => getHeight(size)};
  box-sizing:border-box;

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

  border-radius: ${({ theme }) => theme.size.radius.medium};
  background-color: ${({ theme }) => theme.color.surface.surface_1};

  overflow: hidden;

  .dx-dropdowneditor-dropdown {
    margin-top:10px;
  }

  &:focus-within {
    border-color: #283593;
  }

  .dx-texteditor-input-container {
    align-items: center !important;
  }
  .dx-list-item-content {
    padding: 0px !important;
  }

  .dx-textbox {
    margin: 0px !important;
    height: 100% !important;
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width: 10px;
      aspect-ratio: 1/1;
      z-index: 2;
      path {
        stroke: ${({ theme }) => theme.color.text.seconday};
      }
    }

    .dx-clear-button-area {
      display:flex;
      align-items: center;
      justify-content: center;
      
      width:auto;

      background:green;

      .dx-icon-clear {

        
        margin-top:0px;
        top:unset; 
        padding:0px;

        display:flex;
        align-items: center;
        justify-content: center;

        width:auto;
        height:auto;

        background:red;
        &::before {
          content:"";
          display:block;
          width: ${({ size }) => size === 'sm' || size === 'xs' ? '15px' : '17px'};
          aspect-ratio: 1/1;
          background-image: url(  ${({ theme }) => theme.mode === 'day' ? closeBtnDay as {} : closeBtnNight as {}} );
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
    
  }

  .dx-texteditor-container {
    background-color: ${({ theme }) => theme.color.surface.surface_1};
    /* background: #f9fafa !important; */
    overflow:none !important; 
    clear: both;
    position: relative;
    /* height: ${({ size }) => getHeight(size)}; */


    .dx-texteditor-input {
      font-size: ${({ size }) => getInputFontSize(size)};
      line-height: ${({ theme, size }) => theme.typography.lineHeight[getLabelLineHeight(size)]};
      color: ${({ theme }) => theme.color.text.primary};
      font-family: ${({ theme }) => theme.typography.font.regular};
      padding-left:16px;
      transform:translateY(10px)
    }
  }

  .dx-label-before {
    opacity: 0;
    width: 16px !important;
  }

  .dx-label-after {
    opacity: 0;
  }

  .dx-label {
    border: 0px !important;
    padding: 0px !important;
    margin-left: 0px !important;

    span {
      font-size: ${({ size }) => getFocusedLabelFontSize(size)} !important;
      line-height: ${({ theme }) => theme.typography.lineHeight.md} !important;
      color: ${({ theme, status }) =>
    status === "disabled"
      ? theme.color.text.disabled
      : theme.color.text.seconday};
      font-family: ${({ theme }) => theme.typography.font.regular};
      margin-top: 0px !important;
      top: ${({ size }) => size === 'lg' ? '6px' : '2px'} !important;
      transform: translateY(0px) !important;
    }
  }

  
  .dx-texteditor-empty {
    .dx-label {
      span {
        overflow: initial !important;
        font-size: ${({ size }) => getLabelFontSize(size)} !important;
        line-height: ${({ theme, size }) => theme.typography.lineHeight[getLabelLineHeight(size)]} !important;
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
        color: ${({ theme, status }) =>
    status === "disabled"
      ? theme.color.text.disabled
      : theme.color.text.seconday};

        top: 50% !important;
        transform: translateY(-50%) !important;
      }
    }

    height: ${({ size }) => getHeight(size)};

  }



  .dx-state-focused {
    height: ${({ size }) => getHeight(size)};

    .dx-label {
      span {
        font-size: ${({ size }) => getFocusedLabelFontSize(size)} !important;
        line-height: ${({ size }) => getLabelLineHeight(size)} !important;
        top: 10px !important;
        color: ${({ theme }) => theme.color.text.tertiary};

        top: ${({ size }) => size === 'lg' ? '6px' : '2px'} !important;
        transform: translateY(0px) !important;
      }
    }
  }

  .dx-state-hover {
    height: ${({ size }) => getHeight(size)};

    .dx-label {
      margin-left: 0px !important;

      span {
        color: ${({ theme }) => theme.color.text.seconday};
      }
    }
  }

  
  .dx-popup-normal {
    /* margin-top: 5px !important; */
  }
`;

export const InputDescrpition = styled.div<{ status: status | "disabled" }>`
  padding-top: 8px;
  color: ${({ status }) => {
    switch (status) {
      case "success":
        return ({ theme }) => theme.color.semantic.positive_100;
      case "disabled":
        return ({ theme }) => theme.color.text.disabled;
      case "error":
        return ({ theme }) => theme.color.semantic.negative_100;
      default:
        return ({ theme }) => theme.color.text.seconday;
    }
  }};

  margin-left: 2px;
`;
