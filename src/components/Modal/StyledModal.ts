import styled, { keyframes } from "styled-components";
import { ModalSizes } from "./Modal.types";

export const getWidth = (size: ModalSizes) => {
  switch (size) {
    case "sm":
      return "360px ";
    case "md":
      return "828px";
    case "lg":
      return "1240px";
    default:
      return "828px";
  }
};

export const getPadding = (size: ModalSizes) => {
  switch (size) {
    case "sm":
      return "s_6";
    case "md":
      return "s_4";
    case "lg":
      return "s_4";
    default:
      return "s_4";
  }
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const StyledModal = styled.div<{ isOpen: boolean }>`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s linear;
`;

export const StyledModalContent = styled.div<{ size: ModalSizes }>`
  border-radius: ${({ theme }) => theme.size.radius.large};
  background-color: ${({ theme }) => theme.color.surface.surface_1};
  box-sizing: border-box;
  padding: ${({ theme, size }) => theme.size.spacing[getPadding(size)]};
  width: ${({ size }) => getWidth(size)};
  max-height: 80vh;
  overflow: hidden;
  position: relative;
`;

export const StyledModalHeader = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.fs_24};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.text.primary};
  margin-bottom: ${({ theme }) => theme.size.s_4};
  margin-top: 0px;
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 33px;
`;

export const StyledModalBody = styled.div`
  height: 300px;
  position: relative;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #7580d9;
    border-radius: ${({ theme }) => theme.size.radius.large};
    cursor: pointer;
    height: 50px;
  }
`;
