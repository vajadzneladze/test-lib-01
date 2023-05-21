import styled from 'styled-components';
import { StyledTextProps, VariantProps } from './Text.types';

export const StyledText = styled.div<StyledTextProps & VariantProps>`
  font-weight: ${({ theme, weight }) => theme.typography.fontWeight[weight || 'regular']};
  font-family: ${({ theme, weight }) => theme.typography.font[weight || 'regular']};
  text-align: ${({ theme, align }) => theme.typography.align[align || 'left']};
  color: ${({ theme }) => theme.color.text.primary};

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
          line-height: ${theme.typography.lineHeight.md};
        `;
      case 'p2':
        return `
          font-size: ${theme.typography.fontSize.fs_16};
          line-height: ${theme.typography.lineHeight.sm};
        `;
      case 'p3':
        return `
          font-size: ${theme.typography.fontSize.fs_12};
          line-height: ${theme.typography.lineHeight.md};
        `;
      case 'p4':
        return `
          font-size: ${theme.typography.fontSize.fs_14};
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

