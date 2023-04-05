import React, { forwardRef, ForwardedRef } from "react";
import { TextBox, TreeView } from "devextreme-react";
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
  style: {},
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
      style,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleInitialized = (e: any) => {
      if (ref) {
        ref = e.component.instance();
      }
    };

    return (
      <>
        <InputContainer
          size={size}
          status={disabled ? "disabled" : status}
          style={style}
        >
          <TextBox
            value={value}
            onValueChanged={(e) => onChange(e.value)}
            label={label}
            labelMode="floating"
            onKeyUp={(e: any) => onChange(e.event.target.value)}
            disabled={disabled}
            mode={type}
            onInitialized={handleInitialized}
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
