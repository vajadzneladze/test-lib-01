import styled from "styled-components";
import { StyledSelectBoxProps, status } from "./SelectBox.types";

export const SelectBoxContainer = styled.div<StyledSelectBoxProps>`

.dx-overlay-content {
  margin-top:200px !important;
}


  position: relative;
  width: 100%;
  height: ${({ size }) => (size === "sm" ? "48px" : "56px")};

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
      width: 20px;
      height: 20px;
      z-index: 2;
      path {
        fill: ${({ theme }) => theme.color.text.seconday};
      }
    }
  }

  .dx-texteditor-container {
    background-color: ${({ theme }) => theme.color.surface.surface_1};
    background: #f9fafa !important;
    overflow:initial !important;
    clear: both;
    position: relative;


    .dx-texteditor-input {
      font-size: ${({ theme }) => theme.typography.fontSize.fs_16};
      line-height: ${({ theme }) => theme.typography.lineHeight.md};
      color: ${({ theme }) => theme.color.text.primary};

      padding-top: 22px;
      padding-left:16px;
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
        font-size: ${({ theme }) => theme.typography.fontSize.fs_16} !important;
        line-height: ${({ theme }) =>
          theme.typography.lineHeight.sm} !important;
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
        color: ${({ theme, status }) =>
          status === "disabled"
            ? theme.color.text.disabled
            : theme.color.text.seconday};

        top: 50% !important;
        transform: translateY(-50%) !important;
      }
    }
  }

  .dx-label {
    border: 0px !important;
    padding: 0px !important;
    margin-left: 0px !important;

    span {
      font-size: ${({ theme }) => theme.typography.fontSize.fs_12} !important;
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
        font-size: ${({ theme }) => theme.typography.fontSize.fs_12} !important;
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
