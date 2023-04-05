import React, { forwardRef, ForwardedRef } from "react";
import { TextBox, TreeView } from "devextreme-react";
import { InputProps } from "./Input.types";
import { InputContainer, InputDescrpition, InputIcon } from "./StyledInput";
import Text from "../Text/Text";
import TreeTest from "../Tree/Tree";

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

const treeData = [
  {
    ID: 1,
    name: "Stores",
    expanded: true,
  },
  {
    ID: "1_1",
    categoryId: 1,
    name: "Super Mart of the West",
    expanded: true,
  },
  {
    ID: "1_1_1",
    categoryId: "1_1",
    name: "Video Players",
  },
  {
    ID: "1_1_1_1",
    categoryId: "1_1_1",
    name: "HD Video Player",
    price: 220,
  },
  {
    ID: "1_1_1_2",
    categoryId: "1_1_1",
    name: "SuperHD Video Player",
    price: 270,
  },
  {
    ID: "1_1_2",
    categoryId: "1_1",
    name: "Televisions",
    expanded: true,
  },
  {
    ID: "1_1_2_1",
    categoryId: "1_1_2",
    name: "SuperLCD 42",
    price: 1200,
  },
  {
    ID: "1_1_2_2",
    categoryId: "1_1_2",
    name: "SuperLED 42",
    price: 1450,
  },
  {
    ID: "1_1_2_3",
    categoryId: "1_1_2",
    name: "SuperLED 50",
    price: 1600,
  },
  {
    ID: "1_1_2_4",
    categoryId: "1_1_2",
    name: "SuperLCD 55",
    price: 1750,
  },
  {
    ID: "1_1_2_5",
    categoryId: "1_1_2",
    name: "SuperLCD 70",
    price: 4000,
  },
  {
    ID: "1_1_3",
    categoryId: "1_1",
    name: "Monitors",
  },
  {
    ID: "1_1_3_1",
    categoryId: "1_1_3",
    name: '19"',
  },
  {
    ID: "1_1_3_1_1",
    categoryId: "1_1_3_1",
    name: "DesktopLCD 19",
    price: 160,
  },
  {
    ID: "1_1_4",
    categoryId: "1_1",
    name: "Projectors",
  },
  {
    ID: "1_1_4_1",
    categoryId: "1_1_4",
    name: "Projector Plus",
    price: 550,
  },
  {
    ID: "1_1_4_2",
    categoryId: "1_1_4",
    name: "Projector PlusHD",
    price: 750,
  },
];

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

        <TreeTest data={ treeData }/>
      </>
    );
  }
);

Input.defaultProps = defaultProps;

export default Input;
