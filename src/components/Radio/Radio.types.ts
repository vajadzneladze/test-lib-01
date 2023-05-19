export type LabelPosition = 'left' | 'right' | undefined;
export type FlexDirection = 'row' | 'column' | undefined;

/**Radio Component Props */
export interface RadioProps {
  labelPosition?: LabelPosition;
  flexDirection?: FlexDirection;
  className?: string;
  onChange?: (e: any) => void;
  data: RadioItemProp[],
  disabled?: boolean
}

export interface RadioItemProp {
  label?: string;
  value?: boolean;
}

/** Radio Styled Props  */
export interface StyledRadioProps {
  flexDirection?: FlexDirection;
}
