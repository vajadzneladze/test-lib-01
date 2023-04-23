import React, { memo, useCallback, useEffect, useState } from 'react';
import { FormToggleCircle, FormToggleWrapper } from './StyledFormToggle';
import { FormToggleProps } from './FormToggleTypes';
import Icon from '../Icon/Icon';


const defaultProps: FormToggleProps = {
    isOn: false,
    changeHandler: (e: any) => { },
    withIcon: false,
    onIcon: 'Sun',
    offIcon: 'Moon',
    disabled: false
};



const FormToggle = ({ isOn, changeHandler, withIcon, offIcon, onIcon, disabled, ...props }: FormToggleProps) => {

    const [isActive, setIsActive] = useState<boolean>(isOn);

    const onChangeHandler = useCallback((e: any) => {

        e.stopPropagation();
        changeHandler(!isActive);

        setIsActive(prev => !prev);
    }, [isActive])


    // useEffect(() => {
    //     changeHandler(isActive);
    // }, [isActive])

    return (
        <FormToggleWrapper
            isActive={isActive}
            onClick={disabled ? () => { } : onChangeHandler} withIcon={withIcon || false} disabled={disabled} {...props}>
            <FormToggleCircle
                isActive={isActive}
                withIcon={withIcon || false}
                disabled={disabled}>
                {
                    withIcon && onIcon && offIcon && <Icon
                        name={isActive ? onIcon : offIcon}
                        style={{
                            width: '15px',
                            height: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto'
                        }} />
                }
            </FormToggleCircle>
        </FormToggleWrapper>
    )
}

FormToggle.defaultProps = defaultProps;

export default FormToggle;