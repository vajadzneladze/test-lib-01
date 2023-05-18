import { CheckBoxProps } from "../CheckBox/CheckBox.types";

export type FlexDirection = 'row' | 'column' | undefined;

export interface ICheckBoxGroupProps {
    data: CheckBoxProps[],
    flexDirection: FlexDirection
    onChangeHandler: (e:any) => void,
}


export interface StyledCheckBoxGroupProps {
    flexDirection: FlexDirection
}


