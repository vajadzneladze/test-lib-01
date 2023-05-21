import React from 'react';
import { StyledText } from './StyledText';
import { TextProps } from './Text.types';

const Text = ({ text, variant, weight, children, align, ...props }: TextProps) => {
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