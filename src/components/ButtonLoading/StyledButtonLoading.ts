import { Button } from "devextreme-react";
import 'devextreme/dist/css/dx.light.css';
import styled, { keyframes } from "styled-components";
import { StyledButtonLoadingProps } from "./ButtonLoading.types";


const circlesAnimation = ({ top, left, color }: { top: string, left: string, color: string }) => keyframes`
    0%,25%,75%,100% {
        border:3px solid ${color};
        width:5px;
        height:5px;
        transform:translate(0px, 0px)
    }
    50%  {
        border:2px solid ${color};
        width:10px;
        height:10px;
        transform:translate(${left}, ${top})
    }
`;

export const ButtonWrap = styled(Button) <StyledButtonLoadingProps>`
    background-color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.semantic.positive_100 : 'transparent'};
    color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.text.static_primary : theme.color.text.primary};
    border: ${({ variant, theme }) =>
        variant === 'outlined' ? '1px solid' + theme.color.semantic.positive_100 : 'none'};
    width: ${({ size }) => {
        switch (size) {
            case 'thiny':
                return '100px';
            case 'small':
                return '124px';
            case 'medium':
                return '155px';
            case 'large':
                return '172px';
            default:
                return '155px';
        }
    }};
    height: ${({ size }) => {
        switch (size) {
            case 'thiny':
                return '32px';
            case 'small':
                return '48px';
            case 'medium':
                return '56px';
            case 'large':
                return '64px';
            default:
                return '56px';
        }
    }};
    font-size: ${({ size, theme }) =>
        size === 'thiny' ? theme.typography.fontSize.fs_10 : theme.typography.fontSize.fs_12};
    border-radius: ${({ radius, theme }) =>
        radius ? theme.size.radius[radius] : theme.size.radius['medium']};


    &:focus{
        outline:none;
    }

    // Disable hover state
    &:hover {
        background-color: ${({ variant, theme }) => variant === 'contained' ? theme.color.semantic.positive_100 : 'transparent'};
        border: ${({ variant, theme }) => variant === 'outlined' ? `1px solid ${theme.color.semantic.positive_100}` : 'none'};
        color: ${({ variant, theme }) => variant === 'contained' ? theme.color.text.static_primary : theme.color.text.primary};
    }

    // Disable active state
    &:active {
        background-color: ${({ variant, theme }) => variant === 'contained' ? theme.color.semantic.positive_100 : 'transparent'};
        border: ${({ variant, theme }) => variant === 'outlined' ? `1px solid ${theme.color.semantic.positive_100}` : 'none'};
        color: ${({ variant, theme }) => variant === 'contained' ? theme.color.text.static_primary : theme.color.text.primary};
    }
`;

export const LoadingWrapper = styled.div`
    display:flex;
    position:relative;
    width:30px; 
    justify-content:center;
`;

export const LoadingCircle = styled.span<{ variant?: string }>`
    display:block;
    border:3px solid white;
    border-radius:100%;
    width:5px;
    height:5px;
    position:absolute;
   

    &:nth-child(1) {
        left:0px;
        animation : ${props => circlesAnimation({ top: '-2px', left: '-2px', color: props.variant !== 'contained' ? props.theme.color.semantic.positive_100 : 'white' })} 1200ms linear alternate infinite;
        animation-fill-mode: both;
    }

    &:nth-child(2) {
        animation : ${props => circlesAnimation({ top: '-2px', left: '0px', color: props.variant !== 'contained' ? props.theme.color.semantic.positive_100 : 'white' })} 1200ms linear alternate infinite;
        animation-fill-mode: both;
        animation-delay:400ms;
    }

    &:nth-child(3) {
        right:0px;
        animation : ${props => circlesAnimation({ top: '-2px', left: '2px', color: props.variant !== 'contained' ? props.theme.color.semantic.positive_100 : 'white' })} 1200ms linear alternate infinite;
        animation-fill-mode: both;
        animation-delay:800ms;
    }
`;
