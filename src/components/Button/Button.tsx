import React from "react";
import { StyledButton } from "./StyledButton";
import ButtonLoading from "../ButtonLoading/ButtonLoading";
import { ButtonProps } from "./Button.types";
import Icon from "../Icon/Icon";

const defaultProps: ButtonProps = {
  disabled: false,
  variant: "contained",
  size: "medium",
  radius: "medium",
  iconPosition: "left",
  isLoading: false,
};

const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  variant,
  size,
  radius,
  iconPosition,
  icon,
  isLoading,
  ...props
}) => {
  return !isLoading ? (
    <StyledButton
      disabled={disabled}
      variant={variant}
      size={size}
      radius={radius}
      iconPosition={iconPosition}
      {...props}
    >
      {(icon && iconPosition === "left" && (
        <Icon name={icon} style={{ marginRight: "9px" }} />
      )) ||
        ""}
      {text || ""}
      {(icon && iconPosition === "right" && (
        <Icon name={icon} style={{ marginLeft: "9px" }} />
      )) ||
        ""}
    </StyledButton>
  ) : (
    <ButtonLoading
      variant={variant}
      size={size}
      radius={radius}
      disabled={false}
      {...props}
    />
  );
};

Button.defaultProps = defaultProps;

export default Button;
