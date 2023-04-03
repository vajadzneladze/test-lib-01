import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  border: 1px solid grey;
  width: 350px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.color.steel.grey_09};
  border-radius: ${({ theme }) => theme.size.radius.medium};
  background-color: ${({ theme }) => theme.color.surface.surface_1};
  overflow: hidden;

  .dx-textbox {
    margin: 0px !important;
    height: 100% !important;
    background: red !important;
  }

  .dx-texteditor-container {
    background-color: ${({ theme }) => theme.color.surface.surface_1};

    .dx-texteditor-input {
      padding-left: 16px;
      font-size: ${({ theme }) => theme.typography.fontSize.fs_16};
      line-height: ${({ theme }) => theme.typography.lineHeight.md};
      color: ${({ theme }) => theme.color.text.primary};

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
        font-size: ${({ theme }) => theme.typography.fontSize.fs_16} !important;
        line-height: ${({ theme }) =>
          theme.typography.lineHeight.sm} !important;
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
        color: ${({ theme }) => theme.color.text.seconday};

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
      color: ${({ theme }) => theme.color.text.seconday};

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
        color: ${({ theme }) => theme.color.text.seconday};

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
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  &::before {
    font-size: 20px;
    color: ${({ theme }) => theme.color.text.seconday};
  }
`;
