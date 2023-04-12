import styled from "styled-components";

export const StyledGridContainer = styled.div`
  .dx-datagrid-focus-overlay {
    display:none !important;
  }

  .dx-datagrid {
    
    .dx-row {
      height: 52px !important;
      td {
        padding: 15px 8px !important;
        border-left-width: 0px;
        border-right-width: 0px;

        color: ${({ theme }) => theme.color.text.primary};
        font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
        line-height: ${({ theme }) => theme.typography.lineHeight.md};
        font-family: ${({ theme }) => theme.typography.fontFamily}
      }
    }

    .dx-header-row {
      background-color: ${({ theme }) => theme.color.steel.grey_05};
      border-width: 0px;

      td {
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};



        .dx-checkbox-indeterminate {

          &.dx-state-hover {
            .dx-checkbox-icon {
              background: ${({ theme }) => theme.color.semantic.positive_80};
                border: 1px solid ${({ theme }) => theme.color.semantic.positive_80};
            }
          }
              

          &.dx-state-focused  {

            .dx-checkbox-icon {
              background: ${({ theme }) => theme.color.semantic.positive_120};
              border: 1px solid ${({ theme }) => theme.color.semantic.positive_80};
            }
          }

          .dx-checkbox-icon {
              background: ${({ theme }) => theme.color.semantic.positive_120};
              border: 1px solid ${({ theme }) => theme.color.semantic.positive_120};

              &::before {
                top: 50%;
                left: 50%;
                transform:translateY(-50%);
                transform:translateX(-50%);
                margin-top: 0px;
                margin-left:0px;


                  width:8px;
                  height:2px;
                  background-color:  ${({ theme }) => theme.color.text.static_primary};
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
        box-sizing:border-box;
        padding-top:10px;
      }


      .dx-editor-with-menu {
        height:20px;
      }
    }

    .dx-datagrid-rowsview {

      .dx-row {
        transition: background-color 0.3s ease-in-out;
        background-color: ${({ theme }) => theme.color.steel.grey_00};
        border-bottom: 1px solid ${({ theme }) => theme.color.steel.grey_06};

        td  {
          .status-success,
          .status-warning,
          .status-error,
          .status-info {
            padding:${({ theme }) => theme.size.spacing.s_1};
            width:fit-content;
            height:fit-content;
            border-radius:6px;
            color:white;
          }

          .status-success {
            background: ${({ theme }) => theme.color.semantic.positive_100}
          }

          .status-warning {
            background: ${({ theme }) => theme.color.semantic.warning_80}
          }

          .status-error {
            background: ${({ theme }) => theme.color.semantic.negative_100}
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
                  border: 1px solid ${({ theme }) => theme.color.semantic.positive_80};
              }
            }

            &.dx-state-focused {
              .dx-checkbox-icon {
                  background: ${({ theme }) => theme.color.semantic.positive_20};
                  border: 1px solid ${({ theme }) => theme.color.semantic.positive_120};
              }
            }
          }



          .dx-checkbox-checked  {

            .dx-checkbox-icon {
              color: ${({ theme }) => theme.color.text.static_primary};
              background: ${({ theme }) => theme.color.semantic.positive_80};
              border: 1px solid ${({ theme }) => theme.color.semantic.positive_80};
            }

            &.dx-state-hover {
              .dx-checkbox-icon {
                background: ${({ theme }) => theme.color.semantic.positive_120};
                border: 1px solid ${({ theme }) => theme.color.semantic.positive_120};
              }
            }

            &.dx-state-focused {
              .dx-checkbox-icon {
                background: ${({ theme }) => theme.color.semantic.positive_80};
                border: 1px solid ${({ theme }) => theme.color.semantic.positive_120};
              }
            }
            
          }
            
        }

        &:hover {
          background-color: ${({ theme }) => theme.color.steel.grey_02};
        }

        &.dx-selection  {
          td {
            background-color: #e7faff !important;
            color: ${({ theme }) => theme.color.text.primary} !important;
            border-color: ${({ theme }) => theme.color.steel.grey_06} !important;
          }
        }

      }
    }
  }

`;
