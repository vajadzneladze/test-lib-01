/// <reference types="react" />
export interface TypographyProps {
    text: string;
    size: '16px' | '32px' | '52px';
    onClick?: () => void;
}
declare const Typography: ({ text, size, ...props }: TypographyProps) => JSX.Element;
export default Typography;
