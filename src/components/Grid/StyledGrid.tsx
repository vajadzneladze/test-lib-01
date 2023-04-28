import styled from "styled-components";
import FilterButton from '../../assets/icons/filter-1.svg';
import ArrorDownOutlinedSVG from '../../assets/icons/arrow-down-outlined.svg'; 

export const StyledGridContainer = styled.div`

  .dx-datagrid-focus-overlay {
    display: none !important;
  }
  .dx-widget {
    width: auto;
    max-width: none !important;
  }
  .dx-datagrid {
    width: 100%; 

    .dx-row {
      height: 55px !important;
      td {
        padding: 15px 8px !important;
        border-left-width: 0px;
        border-right-width: 0px;

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

      .dx-datagrid-text-content {
        width:100%;
      }


      td {
        /* font-weight: ${({ theme }) => theme.typography.fontWeight.medium}; */
        font-family: ${({ theme }) => theme.typography.font.medium};

        .dx-column-indicators > {
          .dx-sort {
            opacity: 0 !important;
          }
        }


        .dx-header-filter::before {
          content : '';
          width: 15px;
          height: 15px;
          transform:translateY(3px);
          background-size:15px;
          background-image: url(  ${FilterButton as any} );
          background-repeat: no-repeat;
          background-position: center;
          display:block;
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
      .dx-row {
        transition: background-color 0.3s ease-in-out;
        background-color: ${({ theme }) => theme.color.steel.grey_00};
        border-bottom: 1px solid ${({ theme }) => theme.color.steel.grey_06};

        td {
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
              transform:rotate(-90deg)
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

        &.dx-selection {
          td {
            background-color: #e7faff !important;
            color: ${({ theme }) => theme.color.text.primary} !important;
            border-color: ${({ theme }) =>
    theme.color.steel.grey_06} !important;
          }
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
