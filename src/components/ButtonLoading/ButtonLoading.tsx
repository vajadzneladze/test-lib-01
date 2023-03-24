import React from "react";
import { ButtonWrap, LoadingCircle, LoadingWrapper } from "./StyledButtonLoading";

// Define the props for the ButtonLoading component
export interface ButtonLoadingProps {
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'thiny' | 'small' | 'medium' | 'large';
    radius?: 'small' | 'medium' | 'large' | 'circle';
    disabled: false
}

// Define the ButtonLoading component
const ButtonLoading = ({ ...props }: ButtonLoadingProps) => {
    return (
        <ButtonWrap  {...props} focusStateEnabled={false}>
            <LoadingWrapper onClick={e => e.stopPropagation()}>
                <LoadingCircle variant={props.variant} />
                <LoadingCircle variant={props.variant} />
                <LoadingCircle variant={props.variant} />
            </LoadingWrapper>
        </ButtonWrap>
    )
};

export default ButtonLoading;