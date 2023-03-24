import React from 'react';
import { StyledButton } from './StyledButton';
import ButtonLoading from '../ButtonLoading/ButtonLoading';

export interface  ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text?: string;
    disabled?: boolean;
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'thiny' | 'small' | 'medium' | 'large';
    radius?: 'small' | 'medium' | 'large' | 'circle';
    iconPosition?: 'left' | 'right';
    icon?: string,
    isLoading?: boolean,
}

export interface StyledButtonLoadingProps {
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'thiny' | 'small' | 'medium' | 'large';
    radius?: 'small' | 'medium' | 'large' | 'circle';
}


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
                    disabled = {false}
                 />

    );
};

Button.defaultProps = defaultProps;

export default Button;