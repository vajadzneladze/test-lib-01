import React from 'react';
import { StyledText, StyledTextProps } from './StyledText';

export interface TextProps extends StyledTextProps {
  text?: string;
  children?: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'cap1' | 'cap2' | 'cap3' | 'd1' | 'd2' | 'd3';
}

const Text: React.FC<TextProps> = ({ text, variant, weight, children, align, ...props }) => {
  return (
    <StyledText variant={variant} weight={weight} align={align} {...props}>
      {text || children}
    </StyledText>
  );
};

Text.defaultProps = {
  variant: 'p1',
  weight: 'regular',
  align: 'left',
};

export default Text;