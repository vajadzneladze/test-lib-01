import { TreeView } from "devextreme-react";
import styled from "styled-components";
import { size } from "./Tree.types";
import ArrowUp from '../../assets/icons/arrow-up-outlined.svg';
import ArrowUpDark from '../../assets/icons/arrow-up-outlined-dark.svg';
import ArrowDown from '../../assets/icons/arrow-down-outlined.svg';
import ArrowDownDark from '../../assets/icons/arrow-down-outlined-dark.svg';

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
  margin-right:10px;
/* 
  .dx-scrollable-container {
    overflow-y: scroll;

    &::-webkit-scrollbar {
    width: 6px;
    margin-right:10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #7580d9;
    border-radius: ${({ theme }) => theme.size.radius.large};
    cursor: pointer;
    height: 50px;
  }
  } */

 

  
  .dx-treeview-search {
    margin:16px;
    border:1px solid ${({ theme }) =>
      theme.color.steel.grey_06} !important;
    box-sizing:border-box;

    .dx-texteditor-input-container {

      background-color: ${({ theme }) =>
          theme.color.surface.surface_1};


      input {
        font-family: ${({ theme }) => theme.typography.font.regular};
        font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
        line-height: ${({ theme }) => theme.typography.lineHeight.sm};
        background-color: ${({ theme }) =>
          theme.color.steel.grey_005};
      }

      .dx-placeholder {

        &::before {
          font-family: ${({ theme }) =>
            theme.typography.font.regular};
        }
      }
    }

    .dx-texteditor-buttons-container {
      background-color: ${({ theme }) => theme.color.steel.grey_005};

      .dx-icon-clear {

        &::before {
          /* content: ""; */
          aspect-ratio:1/1;
          transition: 200ms;
          background-size: 13px;
          background-position: center;
          background-repeat: no-repeat;
    
          transform:rotate(90deg);
          transition:100ms;
        }
      }
    }
  }

  .dx-treeview-select-all-item {
    background-color: ${({ theme }) => theme.color.surface.surface_1};
    ${({ dataStructure }) => dataStructure === 'plain' ? `padding:0px 18px;` : 'padding:0px 0px;'}
    border-bottom: 1px solid ${({ theme }) => theme.color.steel.grey_06} !important;
    margin:0px 16px;

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
        color: ${({ theme }) => theme.color.text.primary};

      }
    }
  }


  .dx-treeview-node-container {

    background-color: ${({ theme }) => theme.color.surface.surface_1} ;

    .dx-treeview-node {
      padding:0px 16px;


      &.dx-state-selected {
        /* background-color: ${ ({ theme }) => theme.color.steel.grey_03 }; */
      }

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

        &::before {
          content: "";
          aspect-ratio:1/1;
          transition: 200ms;
          background-size: 13px;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(  ${({ theme }) => theme.mode === 'day' ? ArrowUp as {} : ArrowUpDark as {}} );
          transform:rotate(90deg);
          transition:100ms;
        }


        &.dx-treeview-toggle-item-visibility-opened {

          &::before {
            transform:rotate(180deg);

            /* background-image: url(  ${({ theme }) => theme.mode === 'day' ? ArrowDown as {} : ArrowDownDark as {}} ); */
          }
        }
      }

    }
  }
  

/* 

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
  } */

  /* .dx-checkbox-indeterminate {

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
  } */
`;
