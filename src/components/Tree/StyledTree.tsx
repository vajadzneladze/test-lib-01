import { TreeView } from "devextreme-react";
import styled from "styled-components";
import { size } from "./Tree.types";

const getTreeItemSizes = (size: size, theme: any) => {
  switch (size) {
    case 'xs':
      return `
        height: 36px;

        & + .dx-treeview-toggle-item-visibility {
          height:36px;
        }

        .tree-node {

          div {
            font-size: ${theme.typography.fontSize.fs_12} !important;
            line-height: ${theme.typography.lineHeight.sm} !important;
          }
        }
      `;
    case 'sm':
      return `
          height: 42px;

          &+.dx-treeview-toggle-item-visibility {
            height:42px;
          }

          .tree-node {

            div {
              font-size: ${theme.typography.fontSize.fs_12} !important;
              line-height: ${theme.typography.lineHeight.md} !important;
            }
          }
      `;
    case 'md':
      return `
          height: 48px;

          &+.dx-treeview-toggle-item-visibility {
            height:48px;
          }
          
          .tree-node {

            div {
              font-size: ${theme.typography.fontSize.fs_14} !important;
              line-height: ${theme.typography.lineHeight.md} !important;
            }
          }
          `;
    case 'lg':
      return `
          
          height: 56px;

          &+.dx-treeview-toggle-item-visibility {
            height:56px;
          }

          .tree-node {
            div {
              font-size: ${theme.typography.fontSize.fs_14} !important;
              line-height: ${theme.typography.lineHeight.sm} !important;
            }
          }
          `;
    default:
      return '';
  }
};


const getCheckBoxSizes = (size: size, theme: any) => {
  switch (size) {
    case 'xs':
      return `36px `;
    case 'sm':
      return `42px`;
    case 'md':
      return `48px`;
    case 'lg':
      return `56px`;
    default:
      return '';
  }
};


export const StyledTree = styled<any>(TreeView)`


  .dx-treeview-node-container {
    background-color: ${({ theme }) => theme.color.surface.surface_1} ;


    .dx-treeview-node {
      padding:0px 16px;

      .dx-item {
        display:flex;
        align-items: center;

        ${({ theme, size }) => getTreeItemSizes(size, theme)};
        color: ${({ theme }) => theme.color.text.primary};
      }

      .dx-checkbox {
        height:${({ size, theme }) => getCheckBoxSizes(size, theme)} ;

        .dx-checkbox-icon {
          width:18px;
          height:18px;
        }
      }

    }
  }

/* border:1p solid ${({ theme }) => theme.color.steel.grey_09}; */
  

  /* 
    background:white;
    max-height:200px; */

    .dx-scrollable-container {
      /* border:1px solid gray; */
    }
    .dx-treeview-node {
      /* padding-left:; */
    }

    
  .dx-treeview-item {
    /* font-size: 16px;
    color: #333;
    padding: 10px;
    border-bottom: 1px solid #ccc; */
  }

  .dx-treeview-item-selected {
    /* background-color: #f5f5f5; */
  }
`;
