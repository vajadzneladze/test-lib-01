import styled, { css } from 'styled-components';
import { Button as DxButton } from 'devextreme-react/button';

export interface StyledButtonProps {
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'thiny' | 'small' | 'medium' | 'large';
    radius?: 'small' | 'medium' | 'large' | 'circle';
    iconPosition?: 'left' | 'right'
}



export const StyledButton = styled(DxButton) <StyledButtonProps>`

    background-color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.semantic.positive_100 : 'transparent'};

    color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.text.static_primary : theme.color.semantic.positive_100};

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
        size === 'thiny' ? theme.typography.fontSize[0] : theme.typography.fontSize[1]};

    border-radius: ${({ radius, theme }) =>
        radius ? theme.size.radius[radius] : theme.size.radius['medium']};
        
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    .dx-icon {
        color: inherit;
        font-size: inherit;
    }

    &:hover {
        background-color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.semantic.positive_80 : 'transparent'};

        border: ${({ variant, theme }) =>
        variant === 'outlined' ? '1px solid' + theme.color.semantic.positive_80 : 'none'};

        color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.text.static_primary : theme.color.semantic.positive_80};
    }

    &:active {
        background-color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.semantic.positive_120 : 'transparent'};

        border: ${({ variant, theme }) =>
        variant === 'outlined' ? '1px solid' + theme.color.semantic.positive_80 : 'none'};

        color: ${({ variant, theme }) =>
        variant === 'contained' ? theme.color.text.static_primary : theme.color.semantic.positive_120};
    }


    ${({ disabled, variant, theme }) => disabled && css`
        background-color: ${  variant === 'contained' ? theme.color.semantic.positive_05: 'transparent'};
        border: ${ variant === 'outlined' ? '1px solid' + theme.color.semantic.positive_05 : 'none'};
        color: ${ variant === 'contained' ? theme.color.text.disabled : theme.color.text.disabled};
        cursor: not-allowed; 
    `}
`;


