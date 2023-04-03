export interface InputProps {
  label?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  description?: string;
}
