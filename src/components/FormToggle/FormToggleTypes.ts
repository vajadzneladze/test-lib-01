export interface FormToggleProps {
  isOn: boolean;
  changeHandler: (e: any) => void;
  withIcon?: boolean,
  onIcon?:string,
  offIcon?:string,
  disabled?: boolean
}

export interface StyledFormToggleProps {
    isActive: boolean,
    withIcon: boolean,
    disabled?:boolean
}