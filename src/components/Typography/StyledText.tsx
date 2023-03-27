import styled from 'styled-components';

export interface StyledTextProps {
  text?: string;
  children?: React.ReactNode;
  weight?: 'ultraLight' | 'thin' | 'light' | 'regular' | 'medium' | 'bold';
  align?: 'left' | 'right' | 'center' | 'justify';
}

interface VariantProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'cap1' | 'cap2' | 'cap3' | 'd1' | 'd2' | 'd3';
}

export const StyledText = styled.div<StyledTextProps & VariantProps>`
  font-weight: ${({ theme, weight }) => theme.typography.fontWeight[weight || 'regular']};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-align: ${({ theme, align }) => theme.typography.align[align || 'left']};


  ${({ variant, theme }) => {
    switch (variant) {
      case 'h1':
        return `
          font-size: ${theme.typography.fontSize.fs_36};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'h2':
        return `
          font-size: ${theme.typography.fontSize.fs_32};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'h3':
        return `
          font-size: ${theme.typography.fontSize.fs_28};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'h4':
        return `
          font-size: ${theme.typography.fontSize.fs_24};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'h5':
        return `
          font-size: ${theme.typography.fontSize.fs_16};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'h6':
        return `
          font-size: ${theme.typography.fontSize.fs_14};
          line-height: ${theme.typography.lineHeight.md};
        `;
      case 'p1':
        return `
          font-size: ${theme.typography.fontSize.fs_16};
          font-weight: ${theme.typography.fontWeight.ultraLight};
          line-height: ${theme.typography.lineHeight.md};
        `;
      case 'p2':
        return `
          font-size: ${theme.typography.fontSize.fs_16};
          font-weight: ${theme.typography.fontWeight.ultraLight};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'p3':
        return `
          font-size: ${theme.typography.fontSize.fs_12};
          font-weight: ${theme.typography.fontWeight.ultraLight};
          line-height: ${theme.typography.lineHeight.md};
        `;
      case 'p4':
        return `
          font-size: ${theme.typography.fontSize.fs_14};
          font-weight: ${theme.typography.fontWeight.ultraLight};
          line-height: ${theme.typography.lineHeight.md};
        `;
      case 'cap1':
        return `
          font-size: ${theme.typography.fontSize.fs_16};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'cap2':
        return `
          font-size: ${theme.typography.fontSize.fs_14};
          line-height: 16px;
        `; 
      case 'cap3':
        return `
          font-size: ${theme.typography.fontSize.fs_12};
          line-height: 16px;
        `;
      case 'd1':
        return `
          font-size: ${theme.typography.fontSize.fs_56};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'd2':
        return `
          font-size: ${theme.typography.fontSize.fs_48};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'd3':
        return `
          font-size: ${theme.typography.fontSize.fs_44};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      default:
        return '';
    }
  }}
`;

