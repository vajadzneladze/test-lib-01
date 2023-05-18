import React, { useState } from 'react';
import { StyledCheckBox } from './StyledCheckBox';
import { CheckBox as DxCheckBox } from 'devextreme-react';
import Text from '../Text/Text';
import { CheckBoxProps } from './CheckBox.types';

const defaultProps: CheckBoxProps = {
    value: false,
    label: '',
    labelPosition: 'right'
};

const CheckBox = ({
    label,
    value,
    labelPosition,
    className,
    onChange,
    ...props
}: CheckBoxProps) => {

    const [state, setState] = useState(value);

    const checkHandler = (val: any) => {
        setState(val);
        if (onChange) {
            onChange({ value: val, label: label });
        }
    }

    return (
        <StyledCheckBox flexDirection={labelPosition} className={className || ''} {...props}>
            <DxCheckBox
                value={state}
                onValueChange={checkHandler}
                enableThreeStateBehavior={false}
            />

            {
                label && <div onClick={() => checkHandler(!state)}>
                    <Text text={label} variant='p3' style={{ cursor: 'pointer', userSelect: 'none' }} />
                </div>
            }
        </StyledCheckBox>
    )
}



CheckBox.defaultProps = defaultProps;

export default CheckBox;
