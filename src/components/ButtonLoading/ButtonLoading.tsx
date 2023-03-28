import React from "react";
import { ButtonWrap, LoadingCircle, LoadingWrapper } from "./StyledButtonLoading";
import { ButtonLoadingProps } from "./ButtonLoading.types";

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