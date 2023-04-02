/**Button Component Props */
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  text?: string;
  disabled?: boolean;
  variant?: "contained" | "text" | "outlined";
  size?: "thiny" | "small" | "medium" | "large";
  radius?: "small" | "medium" | "large" | "circle";
  iconPosition?: "left" | "right";
  icon?: string;
  isLoading?: boolean;
  onClick?: (e: any) => void;
}

/** Button Styled Props  */
export interface StyledButtonProps {
  variant?: "contained" | "text" | "outlined";
  size?: "thiny" | "small" | "medium" | "large";
  radius?: "small" | "medium" | "large" | "circle";
  iconPosition?: "left" | "right";
  disabled?: boolean;
}
