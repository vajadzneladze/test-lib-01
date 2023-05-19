import React from 'react';
import { RadioItemProp, RadioProps } from './Radio.types';
import { RadioGroup } from 'devextreme-react';
import { StyledRadio } from './StyledRadio';

const defaultProps: RadioProps = {
  data: [],
  labelPosition: 'right',
  flexDirection: 'row',
  disabled: false
};

const Radio = ({
  data,
  labelPosition,
  className,
  flexDirection,
  disabled,
  onChange,
  ...props
}: RadioProps) => {


  const radioHandler = (val: any) => {


    const newArray = [...data];

    newArray.forEach((item: RadioItemProp, index: number) => {

      newArray[index] = {
        ...item,
        value: val.value === item.label
      };

      if (val.value === item.label && onChange) {
        onChange({ index: index, target: { value: true  , label: val.value} , list: newArray });
      }
    });
  }


  return (
    <StyledRadio flexDirection={flexDirection} className={className || 'radio-btn'} {...props}>
      <RadioGroup
        items={data}
        defaultValue={ data.find((item:any) => item.value )?.label }
        onValueChanged={radioHandler}
        rtlEnabled = { labelPosition  === 'left'}
        displayExpr="label"
        disabled = {disabled}
        valueExpr={'label'}
      />
    </StyledRadio>
  )
}



Radio.defaultProps = defaultProps;

export default Radio;
