import React from "react";
import { TextBox } from "devextreme-react";
import { InputProps } from "./Input.types";
import { InputContainer, InputIcon } from "./StyledInput";
import Text from "../Text/Text";

const Input: React.FC<InputProps> = ({
  label = "",
  value = "",
  onChange,
  icon,
  description = "",
  ...props
}) => {
  return (
    <>
      <InputContainer> 
        <TextBox
          value={value}
          onValueChanged={(e) => onChange(e.value)}
          label={label}
          labelMode="floating"
          onKeyUp={ ( e:any ) => onChange(e.event.target.value)}
          { ...props}
        >
          {icon && (
            <InputIcon
              className={`dx-icon-${icon}`}
            />
          )}
        </TextBox>
      </InputContainer>

      {description && (
        <Text variant="p3" style={{ marginTop: "8px", color: "green" }}>
          {description}
        </Text>
      )}
    </>
  );
};

export default Input;
