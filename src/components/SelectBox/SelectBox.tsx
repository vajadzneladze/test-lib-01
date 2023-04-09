import React, { useCallback, useState } from "react";
import { SelectBox as DxSelectBox } from "devextreme-react";
import Icon from "../Icon";
import { InputContainer } from "../Input/StyledInput";
import { InputDescrpition, SelectBoxContainer } from "./StyledSelectBox";
import { SelectBoxProps } from "./SelectBox.types";
import Text from "../Text/Text";

export const dummyData = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
  { id: 4, name: "Option 4" },
  { id: 5, name: "Option 5" },
];

const defaultProps: SelectBoxProps = {
  label: "Select",
  value: 2,
  onChange: () => {},
  description: "",
  size: "sm",
  disabled: false,
  data: dummyData
};

const SelectBox = ({
  label,
  value,
  onChange,
  description,
  size,
  disabled,
  status,
  style,
  data,
  ...props
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsOpen(true);
  };

  const [selectedValues, setSelectedValues] = React.useState(value);

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  const onValueChanged = useCallback((e: any) => {

    onChange(e.value);
    setSelectedValues(e.value);
    // console.log(e.previousValue, "წინა მნიშვნელობა");
    // console.log(e.value, "მიმდინარე მნიშვნელობა");
    // setSelectedValues(e.value);
  }, []);



  const renderDropdownButton = (e: any) => {
    return (
      <div className="dx-dropdown-button-content">
        <span></span>
        <Icon name={isOpen ? "ArrowUp" : "ArrowDown"} />
      </div>
    );
  };




  const renderOption = (option: any) => {


    return (
      <div className="option">
        <div className="option-name">
          <Text variant="p2"> {option.name}</Text>
        </div>
        <div className="option-description">{option.description}</div>
      </div>
    );
  };


  return (
    <>
      <SelectBoxContainer
        size={size}
        status={disabled ? "disabled" : status}
        style={style}
      >
        <DxSelectBox
          dataSource={data}
          valueExpr="id"
          disabled={disabled}
          displayExpr="name"
          searchEnabled={true}
          searchExpr="name"
          searchMode="contains"
          labelMode="floating"
          label={label}
          value={selectedValues}
          showClearButton={true}
          //   searchTimeout={100}
          onValueChanged={onValueChanged}
          //   searchPlaceholder="Search..."
          placeholder=" "
          onOpened={handleDropdownOpen}
          onClosed={handleDropdownClose}
          dropDownButtonRender={renderDropdownButton}
          itemRender={renderOption}
          {...props}
        />
      </SelectBoxContainer>

      {description && (
        <InputDescrpition status={disabled ? "disabled" : status}>
          <Text variant="p3" weight="regular">
            {description}
          </Text>
        </InputDescrpition>
      )}
    </>
  );
};

SelectBox.defaultProps = defaultProps;

export default SelectBox;
