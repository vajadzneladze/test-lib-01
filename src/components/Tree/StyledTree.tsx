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


const getSelectAllCheckboxSize = (size: size, theme: any) => {
  switch (size) {
    case 'xs':
      return `
     
            font-size: ${theme.typography.fontSize.fs_12} !important;
            line-height: ${theme.typography.lineHeight.sm} !important;
       
      `;
    case 'sm':
      return `
        
              font-size: ${theme.typography.fontSize.fs_12} !important;
              line-height: ${theme.typography.lineHeight.md} !important;
        
      `;
    case 'md':
      return `
         
              font-size: ${theme.typography.fontSize.fs_14} !important;
              line-height: ${theme.typography.lineHeight.md} !important;
          
          `;
    case 'lg':
      return `
              font-size: ${theme.typography.fontSize.fs_14} !important;
              line-height: ${theme.typography.lineHeight.sm} !important;
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

  background-color: ${({ theme }) => theme.color.surface.surface_1} ;
  /* padding-bottom:50px; */

  .dx-treeview-select-all-item {
    background-color: ${({ theme }) => theme.color.surface.surface_1};
    ${({ dataStructure }) => dataStructure === 'plain' ? `padding:0px 32px;` : 'padding:0px 16px;'}


    .dx-checkbox-container {

      height:${({ size, theme }) => getCheckBoxSizes(size, theme)} ;

      .dx-checkbox-icon {
        width:18px;
        height:18px;
      }
      .dx-checkbox-text {
        font-family: ${({ theme }) => theme.typography.font.regular};
        padding-left:16px;
        ${({ theme, size }) => getSelectAllCheckboxSize(size, theme)};

      }
    }
  }


  .dx-treeview-node-container {

    background-color: ${({ theme }) => theme.color.surface.surface_1} ;

    .dx-treeview-node {
      padding:0px 16px;

      .dx-item {
        ${({ dataStructure }) => dataStructure === 'plain' ? `margin-left:16px;` : ''}
        display:flex;
        align-items: center;

        ${({ theme, size }) => getTreeItemSizes(size, theme)};
        color: ${({ theme }) => theme.color.text.primary};
      }

      .dx-checkbox {
        ${({ dataStructure }) => dataStructure === 'plain' ? `margin-left:16px;` : ''}
        height:${({ size, theme }) => getCheckBoxSizes(size, theme)} ;
        top:0px;

        .dx-checkbox-icon {
          width:18px;
          height:18px;
        }

      }

      .dx-treeview-toggle-item-visibility { 
        left:10px;
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





  .dx-checkbox {
    .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.steel.grey_01};
        border: 1px solid ${({ theme }) => theme.color.steel.grey_07}; 
      }


    &.dx-state-hover {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_20};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_80};
      }
    }

    &.dx-state-focused {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_20};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_120};
      }
    }
  }



  .dx-checkbox {
    .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.steel.grey_01};
        border: 1px solid ${({ theme }) => theme.color.steel.grey_07}; 
      }


    &.dx-state-hover {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_20};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_80};
      }
    }

    &.dx-state-focused {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_20};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_120};
      }
    }
  }


  .dx-checkbox-checked {
    .dx-checkbox-icon {
      color: ${({ theme }) => theme.color.text.static_primary};
      background: ${({ theme }) => theme.color.semantic.positive_80};
      border: 1px solid ${({ theme }) => theme.color.semantic.positive_80};
    }

    &.dx-state-hover {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_120};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_120};
      }
    }

    &.dx-state-focused {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_80};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_120};
      }
    }
  }

  .dx-checkbox-indeterminate {

    &.dx-state-hover {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_80};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_80};
      }
    }

    &.dx-state-focused {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_120};
        border: 1px solid
          ${({ theme }) => theme.color.semantic.positive_80};
      }
    }
 
    .dx-checkbox-icon {
      background: ${({ theme }) => theme.color.semantic.positive_120};
      border: 1px solid
        ${({ theme }) => theme.color.semantic.positive_120};

      &::before {
        top: 50%;
        left: 50%;
        transform: translateY(-50%);
        transform: translateX(-50%);
        margin-top: 0px;
        margin-left: 0px;
        
        width: 8px;
        height: 2px;
        background-color: ${({ theme }) => theme.color.text.static_primary};
        border-radius: 1px;
      }
    }
  }
`;
