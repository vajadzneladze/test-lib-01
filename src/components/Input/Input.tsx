import React, { forwardRef, ForwardedRef } from "react";
import { TextBox } from "devextreme-react";
import { InputProps } from "./Input.types";
import { InputContainer, InputDescrpition, InputIcon } from "./StyledInput";
import Text from "../Text/Text";

const defaultProps: InputProps = {
  label: "",
  value: "",
  onChange: () => {},
  icon: "",
  description: "",
  size: "sm",
  type: "text",
  disabled: false,
};

const Input = forwardRef(
  (
    {
      label,
      value,
      onChange,
      icon,
      description,
      size,
      type,
      disabled,
      status,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <InputContainer size={size} status={disabled ? "disabled" : status}>
          <TextBox
            value={value}
            onValueChanged={(e) => onChange(e.value)}
            label={label}
            labelMode="floating"
            onKeyUp={(e: any) => onChange(e.event.target.value)}
            disabled={disabled}
            mode={type}
            {...props}
          >
            {icon && <InputIcon className={`dx-icon-${icon}`} />}
          </TextBox>
        </InputContainer>

        {description && (
          <InputDescrpition status={disabled ? "disabled" : status}>
            <Text variant="p3" weight="regular">
              {description}
            </Text>
          </InputDescrpition>
        )}
      </>
    );
  }
);

Input.defaultProps = defaultProps;

export default Input;
