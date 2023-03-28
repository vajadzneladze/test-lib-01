export interface StyledTextProps {
    text?: string;
    children?: React.ReactNode;
    weight?: 'ultraLight' | 'thin' | 'light' | 'regular' | 'medium' | 'bold';
    align?: 'left' | 'right' | 'center' | 'justify';
}

export interface VariantProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'cap1' | 'cap2' | 'cap3' | 'd1' | 'd2' | 'd3';
}

export interface TextProps extends StyledTextProps {
    text?: string;
    children?: React.ReactNode;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'cap1' | 'cap2' | 'cap3' | 'd1' | 'd2' | 'd3';
}

