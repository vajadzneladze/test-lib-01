import React from "react";
import { ButtonWrap, LoadingCircle, LoadingWrapper } from "./StyledButtonLoading";

// Define the props for the ButtonLoading component
export interface ButtonLoadingProps  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">{
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'thiny' | 'small' | 'medium' | 'large';
    radius?: 'small' | 'medium' | 'large' | 'circle';
    disabled: false,
    onClick?: (e: any) => void
}

// Define the ButtonLoading component
const ButtonLoading = ({ ...props }: ButtonLoadingProps) => {
    return (
        <ButtonWrap focusStateEnabled={false}  {...props} >
            <LoadingWrapper onClick={e => e.stopPropagation()}>
                <LoadingCircle variant={props.variant} />
                <LoadingCircle variant={props.variant} />
                <LoadingCircle variant={props.variant} />
            </LoadingWrapper>
        </ButtonWrap>
    )
};

export default ButtonLoading;