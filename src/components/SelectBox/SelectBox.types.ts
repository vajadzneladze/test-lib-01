export interface SelectBoxProps {
    label: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    description?: string;
    size?: size,
    disabled: boolean,
    status?: status,
    style?: object
    data?: object[]
  }
  
  export interface StyledSelectBoxProps {
    status?: status | 'disabled',
    size?: size
  }
  
  
  export type status = 'success' | 'error' | undefined;
  export type size = 'sm' | 'md' | undefined;