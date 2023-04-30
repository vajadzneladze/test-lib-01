
import styled from "styled-components";
import FilterButton from '../../assets/icons/filter-1.svg';
import FilterButtonDark from '../../assets/icons/filter-1-dark.svg';
import ArrorDownOutlinedSVG from '../../assets/icons/arrow-down-outlined.svg';

export const StyledGridContainer = styled.div`

  .dx-datagrid-focus-overlay {
    display: none !important;
  }

  .dx-datagrid-columns-separator {
    display:none;
  }
  .dx-widget {
    width: auto;
    max-width: none !important;
  }

  .dx-datagrid-pager {
    background-color: ${({ theme }) => theme.color.steel.grey_00};
    border-top:0px;

    .dx-page {
      color:${ ({ theme }) => theme.color.text.primary};
      font-family: ${ ({ theme }) => theme.typography.font.regular};

      &.dx-selection {
        background-color:${ ({ theme }) => theme.color.text.primary};
        color:${ ({ theme }) => theme.color.steel.grey_00};
        font-family: ${ ({ theme }) => theme.typography.font.regular};
      }
    }
  }
  .dx-datagrid {
    width: 100%; 

    .dx-error-row {
      display:none;
    }
    .dx-row {
      /* height: 55px !important; */
      td {
        /* padding: 15px 8px !important; */
        border: 0px;

        color: ${({ theme }) => theme.color.text.primary};
        font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
        line-height: ${({ theme }) => theme.typography.lineHeight.md};
        font-family: ${({ theme }) => theme.typography.font.regular};
      }
    }

    .dx-header-row {
      background-color: ${({ theme }) => theme.color.steel.grey_05};
      border-width: 0px;
      height:50px; 
      border-left:1px solid ${({ theme }) => theme.color.steel.grey_06};
      border-right:1px solid ${({ theme }) => theme.color.steel.grey_06};
      .dx-datagrid-text-content {
        width:100%;
      }


      td {
        font-family: ${({ theme }) => theme.typography.font.medium};
        padding:0px 8px;
        vertical-align: middle;
        transition:200ms;
        &:active {
          background: ${({ theme }) => theme.color.steel.grey_06};
        }

        &.dx-command-select {
          &:active {
            background: transparent;
            box-shadow: none;
          }
        }
        .dx-column-indicators > {
          .dx-sort {
            opacity: 0 !important;
          }
        } 
        .dx-column-indicators {
          height:16px;
          overflow:hidden;
        }
        &.dx-datagrid-group-space {
          &:active {
            background: transparent;
            box-shadow: none;
          }
          padding-top:0px;
        } 

        .dx-header-filter-empty::after {
          display:none
        }

        .dx-header-filter::before {
          content : '';   
          width: 15px;
          height: 15px;
          background-size:14px;
          background-image: url(  ${({ theme }) => theme.mode === 'day' ? FilterButton as {} : FilterButtonDark as {}} );
          background-repeat: no-repeat;
          background-position: center;
          display:block;
          line-height:7px;
          font-size:14px;
          transform:translateY(2px)
        }


        .dx-sort-indicator {
          position:relative;

          &::after {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({ theme }) => theme.color.text.disabled};
          margin-right: 10px;
          top: 4px;
          left: 0;
          float:right;
        }

        &::before {
          content: "";
          display: block;
          position: relative;
          float: left;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({ theme }) => theme.color.text.disabled};
          margin-right: 10px;
          top: 12px;
          left: 0;
        }

        }
        



        &[aria-sort="descending"] {

          .dx-sort-indicator {
             
            &::before {
              border-top-color:${({ theme }) => theme.color.text.primary};
            }
          }
        }

        &[aria-sort="ascending"] {

          .dx-sort-indicator {
            
            &::after {
              border-bottom-color:${({ theme }) => theme.color.text.primary};
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
              background-color: ${({ theme }) =>
    theme.color.text.static_primary};
              border-radius: 1px;
            }
          }
        }
      }
    }

    .dx-datagrid-filter-row {
      background-color: ${({ theme }) => theme.color.steel.grey_05};

      .dx-texteditor-input {
        color: ${({ theme }) => theme.color.text.primary};
        font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
        line-height: ${({ theme }) => theme.typography.lineHeight.md};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        box-sizing: border-box;
        padding-top: 10px;
      }

      .dx-editor-with-menu {
        height: 20px;
      }
    }

    .dx-datagrid-rowsview {
      border-top:1px solid ${({ theme }) => theme.color.steel.grey_06};

      .dx-master-detail-cell {
        background:transparent;
      }
      .dx-row {
        transition: background-color 0.3s ease-in-out;
        background-color: ${({ theme }) => theme.color.steel.grey_00};
        border-bottom: 1px solid ${({ theme }) => theme.color.steel.grey_06} !important;
        border-top:0px;
        height:50px;
        
        &.dx-selection {


          td {
            color: ${({ theme }) => theme.color.text.primary} !important;
            border-color: ${({ theme }) => theme.color.steel.grey_06} !important;
            border-bottom:0px;
            border-top:0px;
            background-color: ${({ theme }) => theme.mode === 'day' ? '#E7FAFF' : '#23353A'} !important;

          }
        }


        td {

          vertical-align: middle;

          &.dx-datagrid-group-space  {
            padding-top:0px;
          }

          .status-success,
          .status-warning,
          .status-error,
          .status-info {
            padding: ${({ theme }) => theme.size.spacing.s_1};
            width: fit-content;
            height: fit-content;
            border-radius: 6px;
            color: white;
          }

          .dx-datagrid-group-closed {
            display:flex;
            align-items: center;
            justify-content: center;
            &::before {
              content: '';
              width:13px;
              height:13px;
              display:flex;
              background-image:url(${ArrorDownOutlinedSVG as any});
              background-repeat: no-repeat;
              background-position:center;
              background-size:13px;
              transition:1s ease;
              margin-left:13px;
              margin-right:13px;
            }
          
          }

          .dx-datagrid-group-opened {
            display:flex;
            align-items: center;
            justify-content: center;
            &::before {
              content: '';
              width:13px;
              height:13px;
              display:flex;
              background-image:url(${ArrorDownOutlinedSVG as any});
              background-repeat: no-repeat;
              background-position:center;
              background-size:13px;
              transition:1s ease;
              transform:rotate(-180deg);
              margin-left:13px;
              margin-right:13px;
            }
          }

          .status-success {
            background: ${({ theme }) => theme.color.semantic.positive_100};
          }

          .status-warning {
            background: ${({ theme }) => theme.color.semantic.warning_80};
          }

          .status-error {
            background: ${({ theme }) => theme.color.semantic.negative_100};
          }

          .status-info {
            background: #283593;
          }

          .dx-checkbox-icon {
            color: ${({ theme }) => theme.color.text.static_primary};
            background: ${({ theme }) => theme.color.steel.grey_01};
            border: 1px solid ${({ theme }) => theme.color.steel.grey_07};
          }

          .dx-checkbox {
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
              border: 1px solid
                ${({ theme }) => theme.color.semantic.positive_80};
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
        }

        &:hover {
          background-color: ${({ theme }) => theme.color.steel.grey_02};
        }
     
      }
    }


    .dx-loadpanel {
      
      .dx-loadpanel-content {
        background-color:${ ({ theme }) => theme.color.steel.grey_00} !important;
        border-color: ${ ({ theme }) => theme.color.steel.grey_06} !important;

        .dx-loadpanel-message {
          font-family: ${ ({ theme }) => theme.typography.font.regular} !important;
          color: ${ ({ theme }) => theme.color.text.primary} !important;
          font-size: ${ ({ theme  }) => theme.typography.fontSize.fs_12};
          line-height: ${ ({ theme }) => theme.typography.lineHeight.md}
        }
      }
    }
  }
`;

export const StyledGridDeleteSection = styled.div`
  display: flex;
  float:left;
  margin-bottom:14px;
  gap:8px;
  align-items: center;

  svg {
    padding:8px;
    background-color: ${({ theme }) => theme.color.steel.grey_04};
    cursor:pointer;
    border-radius: ${({ theme }) => theme.size.radius.medium};
    width: auto;
    height: auto;
    path {
      fill: ${({ theme }) => theme.color.semantic.negative_100}
    }
  }
`;

export const StyledGridDragShowButton = styled.div`
  position:absolute;
  right:10px;
  top: 56px;
  padding-top:5px;
  box-sizing:border-box;
  z-index:999;
  cursor:pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  width:36px;
  height:36px;
  background-color: ${({ theme }) => theme.color.steel.grey_07};
  border-radius: ${({ theme }) => theme.size.radius.large};

  svg {
    path {
      stroke:${({ theme }) => theme.color.text.primary};

    }
  }
`;