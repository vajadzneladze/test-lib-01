import React, { useState } from 'react';
import { StyledCheckBoxGroup } from './StyledCheckBoxGroup';
import { ICheckBoxGroupProps } from './CheckBoxGroup.types';
import { CheckBoxProps } from '../CheckBox/CheckBox.types';
import ChekcBox from '../CheckBox/CheckBox';

const defaultProps: ICheckBoxGroupProps = {
    data: [],
    flexDirection: 'row',
    onChangeHandler: (e) => null
};

const CheckBoxGroup = ({
    data,
    flexDirection,
    onChangeHandler,
    ...props
}: ICheckBoxGroupProps) => {

    const [list, setList] = useState(data || []);

    const changeHandler = (i: number) => {

        const arr = [...list];
        arr[i] = { ...arr[i], value: !arr[i].value }

        setList(arr);

        if(onChangeHandler){
            onChangeHandler({ target: arr[i], list: arr });
        }
    }

    return (
        <StyledCheckBoxGroup flexDirection={flexDirection} {...props}>
            {
                list && list.length ? list.map((item: CheckBoxProps, index: number) => {

                    return <div key={index} onClick={() => changeHandler(index)}>
                        <ChekcBox value={item.value} label={item.label} labelPosition = {item.labelPosition || 'right'} />
                    </div>
                }) : ''
            }

        </StyledCheckBoxGroup>
    )
}


CheckBoxGroup.defaultProps = defaultProps;
export default CheckBoxGroup;