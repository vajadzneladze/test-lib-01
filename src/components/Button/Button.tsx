import React from 'react';
import { StyledButton } from './StyledButton';
import ButtonLoading from '../ButtonLoading/ButtonLoading';
import { ButtonProps } from './Button.types';


const defaultProps: ButtonProps = {
    disabled: false,
    variant: 'contained',
    size: 'medium',
    radius: 'medium',
    iconPosition: 'left',
    icon: '',
    isLoading: false
}

const Button: React.FC<ButtonProps> = ({
    text,
    disabled,
    variant,
    size,
    radius,
    iconPosition,
    icon,
    isLoading,
    ...props
}) => {

    return (

        !isLoading ?
            <StyledButton
                text={text}
                disabled={disabled}
                variant={variant}
                size={size}
                radius={radius}
                icon={icon}
                focusStateEnabled={false}
                iconPosition={iconPosition}
                {...props}
            /> : <ButtonLoading
                variant={variant}
                size={size}
                radius={radius}
                disabled={false} {...props} />

    );
};

Button.defaultProps = defaultProps;

export default Button;