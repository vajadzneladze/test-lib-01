/** Loading Button Component Props */
export interface ButtonLoadingProps  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">{
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'thiny' | 'small' | 'medium' | 'large';
    radius?: 'small' | 'medium' | 'large' | 'circle';
    disabled: false,
    onClick?: (e: any) => void
}


/** Loading Button Styled Props  */
export interface StyledButtonLoadingProps {
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'thiny' | 'small' | 'medium' | 'large';
    radius?: 'small' | 'medium' | 'large' | 'circle';
}
