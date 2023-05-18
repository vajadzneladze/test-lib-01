export type FlexDirection = 'left' | 'right' | undefined;

/**CheckBox Component Props */
export interface CheckBoxProps {
  label?: string;
  value?: boolean;
  labelPosition?: FlexDirection;
  className?: string;
  onChange?: (e: any) => void;
}

/** CheckBox Styled Props  */
export interface StyledCheckBoxProps {
  flexDirection: FlexDirection;
}
