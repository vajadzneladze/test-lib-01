import React, { forwardRef, ForwardedRef } from "react";
import { TextBox } from "devextreme-react";
import { InputProps } from "./Input.types";
import { InputContainer, InputDescription } from "./StyledInput";
import Icon from "../Icon";

const defaultProps: InputProps = {
  label: "",
  value: "",
  onChange: () => {},
  icon: "InfoCircleOutlined",
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
      <div>
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
            {icon &&    <Icon name = {icon}/> }
          </TextBox>
        </InputContainer>

        {description && (
          <InputDescription status={disabled ? "disabled" : status} size = { size }>
              {description}
          </InputDescription>
        )}
      </div>
    );
  }
);

Input.defaultProps = defaultProps;

export default Input;
