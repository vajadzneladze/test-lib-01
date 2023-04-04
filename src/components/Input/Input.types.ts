
export interface InputProps {
  label?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  description?: string;
  size?: size,
  type?: 'text' | 'email' | 'password',
  disabled: boolean,
  status?: status
}

export interface StyledInputProps {
  status?: status | 'disabled',
  size?: size
}


export type status = 'success' | 'error' | undefined;
export type size = 'sm' | 'md' | undefined;