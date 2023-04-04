import styled, { css } from "styled-components";
import { Button as DxButton } from "devextreme-react/button";
import { StyledButtonProps } from "./Button.types";

export const getBackgroundColor = (
  variant: StyledButtonProps["variant"],
  theme: any
) => {
  switch (variant) {
    case "contained":
      return theme.color.semantic.positive_100;
    case "outlined":
      return "transparent";
    default:
      return "transparent";
  }
};

export const getTextColor = (
  variant: StyledButtonProps["variant"],
  theme: any
) => {
  switch (variant) {
    case "contained":
      return theme.color.text.static_primary;
    case "outlined":
      return theme.color.semantic.positive_100;
    default:
      return theme.color.semantic.positive_100;
  }
};

export const getBorderStyle = (
  variant: StyledButtonProps["variant"],
  theme: any
) => {
  switch (variant) {
    case "outlined":
      return `1px solid ${theme.color.semantic.positive_100}`;
    default:
      return "none";
  }
};

export const getWidth = (size: StyledButtonProps["size"]) => {
  switch (size) {
    case "thiny":
      return "100px";
    case "small":
      return "124px";
    case "medium":
      return "155px";
    case "large":
      return "172px";
    default:
      return "155px";
  }
};

export const getHeight = (size: StyledButtonProps["size"]) => {
  switch (size) {
    case "thiny":
      return "32px";
    case "small":
      return "48px";
    case "medium":
      return "56px";
    case "large":
      return "64px";
    default:
      return "56px";
  }
};

export const getBorderRadius = (
  radius: StyledButtonProps["radius"],
  theme: any
) => {
  return radius ? theme.size.radius[radius] : theme.size.radius["medium"];
};

export const StyledButton = styled(DxButton)<StyledButtonProps>`
  background-color: ${({ variant, theme }) =>
    getBackgroundColor(variant, theme)};
  color: ${({ variant, theme }) => getTextColor(variant, theme)};
  border: ${({ variant, theme }) => getBorderStyle(variant, theme)};
  width: ${({ size }) => getWidth(size)};
  height: ${({ size }) => getHeight(size)};
  font-size: ${({ size, theme }) =>
    size === "thiny"
      ? theme.typography.fontSize.fs_10
      : theme.typography.fontSize.fs_12};
  border-radius: ${({ radius, theme }) => getBorderRadius(radius, theme)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  .dx-icon {
    color: inherit;
    font-size: inherit;
  }

  ${({ style }) => style}

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === "contained"
        ? theme.color.semantic.positive_80
        : "transparent"};
    border: ${({ variant, theme }) =>
      variant === "outlined"
        ? `1px solid ${theme.color.semantic.positive_80}`
        : "none"};
    color: ${({ variant, theme }) =>
      variant === "contained"
        ? theme.color.text.static_primary
        : theme.color.semantic.positive_80};
  }
  &:active {
    background-color: ${({ variant, theme }) =>
      variant === "contained"
        ? theme.color.semantic.positive_120
        : "transparent"};
    border: ${({ variant, theme }) =>
      variant === "outlined"
        ? `1px solid ${theme.color.semantic.positive_80}`
        : "none"};
    color: ${({ variant, theme }) =>
      variant === "contained"
        ? theme.color.text.static_primary
        : theme.color.semantic.positive_120};
  }
  ${({ disabled, variant, theme }) =>
    disabled &&
    css`
      background-color: ${variant === "contained"
        ? theme.color.semantic.positive_05
        : "transparent"};
      border: ${variant === "outlined"
        ? `1px solid ${theme.color.semantic.positive_05}`
        : "none"};
      color: ${variant === "contained"
        ? theme.color.text.disabled
        : theme.color.text.disabled};
      cursor: not-allowed;
    `}

  &:focus {
    outline: none;
  }
`;
