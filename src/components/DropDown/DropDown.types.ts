import { CSSProperties } from "styled-components";

export type status = 'success' | 'error' | undefined;
export type size = 'xs' | 'sm' | 'md' | 'lg' | undefined;


export interface StyledDropDownProps {
    status?: status | 'disabled',
    size?: size
}

export interface DropDownProps extends StyledDropDownProps {
    label?: string,
    value?: any[],
    style?: CSSProperties,
    disabled?: boolean
}

