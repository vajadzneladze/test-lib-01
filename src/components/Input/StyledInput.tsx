import styled from "styled-components";
import { StyledInputProps, size, status } from "./Input.types";




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
      return "12px ";
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

export const getFilledInputLabelSize = (size: size) => {
  switch (size) {
    case "xs":
      return "10px ";
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

export const getEmptyInputLabelSize = (size: size) => {
  switch (size) {
    case "xs":
      return "12px ";
    case "sm":
      return "12px";
    case "md":
      return "16px";
    case "lg":
      return "16px";
    default:
      return "12px";
  }
};

export const InputContainer = styled.div<StyledInputProps>`
  position: relative;
  width: 100%;
  height: ${({ size }) => getHeight(size)};
  box-sizing: border-box;
 
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

  &:focus-within {
    border-color: #283593;
  }

  .dx-textbox {
    margin: 0px !important;
    height: 100% !important;
    position:relative;

    svg {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width : 20px;
      height: 20px;
      z-index:2;
      path {
        /* fill: ${({ theme }) => theme.color.text.seconday}; */
        stroke: ${({ theme }) => theme.color.text.secondary}
      }
    }
  }

  .dx-texteditor-container {
    background-color: ${({ theme }) => theme.color.surface.surface_1};

    .dx-texteditor-input {
      padding-left: 16px;
      font-size: ${({ size }) => getInputFontSize(size)};
      line-height: ${({ theme }) => theme.typography.lineHeight.md};
      color: ${({ theme }) => theme.color.text.primary};
      font-family: ${({ theme }) => theme.typography.font.regular};

      margin-top: 10px;
      padding-right: 38px;
    } 
  }

  .dx-label-before {
    opacity: 0;
    width: 16px !important;
  }

  .dx-label-after {
    opacity: 0;
  }

  .dx-texteditor-empty {
    .dx-label {
      span {
        overflow: initial !important;
        font-size: ${({ size }) => getEmptyInputLabelSize(size)} !important;
        line-height: ${({ theme }) =>
    theme.typography.lineHeight.sm} !important;
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
        color: ${({ theme, status }) =>
    status === "disabled"
      ? theme.color.text.disabled
      : theme.color.text.seconday};
        font-family:${({ theme }) => theme.typography.font.regular};
        top: 50% !important;
        transform: translateY(-50%) !important;
      }
    }

   
  }

  .dx-label {
    border: 0px !important;
    padding: 0px !important;
    margin-left: 0px !important;
    font-family:${({ theme }) => theme.typography.font.regular};


    span {
      font-size: ${({ size }) => getFilledInputLabelSize(size)} !important;
      line-height: ${({ theme }) => theme.typography.lineHeight.md} !important;
      color: ${({ theme, status }) =>
    status === "disabled"
      ? theme.color.text.disabled
      : theme.color.text.seconday};

      margin-top: 0px !important;
      top: 6px !important;
      transform: translateY(0px) !important;
    }
  }

  .dx-state-focused {
    .dx-label {
      span {
        font-size: ${({ size }) => getFilledInputLabelSize(size)} !important;
        line-height: ${({ theme }) =>
    theme.typography.lineHeight.md} !important;
        top: 10px !important;
        color: ${({ theme }) => theme.color.text.tertiary};

        top: 6px !important;
        transform: translateY(0px) !important;
      }
    }
  }

  .dx-state-hover {
    .dx-label {
      margin-left: 0px !important;

      span {
        color: ${({ theme }) => theme.color.text.seconday};
      }
    }
  }
`;

export const InputIcon = styled.i`
  /* position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  &::before {
    font-size: 20px;
    color: ${({ theme }) => theme.color.text.seconday};
  } */
`;

export const InputDescription = styled.div<{ status: status | "disabled", size: size }>`
  padding-top: 8px;
  font-family: ${({ theme }) => theme.typography.font.regular};
  font-size: ${({ size }) => getFilledInputLabelSize(size)};
  margin-left:2px;
  line-height: ${({ theme }) => theme.typography.lineHeight.md};

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

`;
