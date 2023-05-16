import React from 'react';
import { StyledCheckBox } from './StyledCheckBox';
import { CheckBox as DxCheckBox } from 'devextreme-react';



export interface CheckBoxProps {
    value: boolean
}
const checks = [
    {
        test: 'terst',
        checked: false,
    },
    {
        test: 'terst',
        checked: false
    }
]

const ChekcBox = ({ value }: CheckBoxProps) => {


    return (
        <StyledCheckBox>
            {checks.map(el => (
                <DxCheckBox value={value} />

            ))}
        </StyledCheckBox>
    )
}


export default ChekcBox;