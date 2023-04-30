import styled from "styled-components";

export const StyledGridDragContainer = styled.div<any>`
  width: 210px;
  position: absolute;
  z-index: 999;
  right: 15px;
  top: 100px;
  transition: 200ms;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  .dx-datagrid {
    border-radius: ${({ theme }) => theme.size.radius.large};
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0px 0px 4px #C6C6C6;
    background: ${({ theme }) => theme.color.surface.surface_1};
    /* border:1px solid ${({ theme }) => theme.color.steel.grey_01}; */

    .dx-data-row {
      height: 40px;
      display: flex;
      align-items: center;
      width: 200px;
    }

    .dx-column-lines > td {
      border: 0px !important;
    }

    .dx-datagrid-rowsview {
      .dx-row {
        height: 40px !important;

        td > div {
          color: ${({ theme  }) => theme.color.text.primary};
        }

        td {
          font-family: ${({ theme }) => theme.typography.font.regular };
          font-size: ${ ({ theme }) => theme.typography.fontSize.fs_12};
          line-height:  ${ ({ theme }) => theme.typography.lineHeight.large };
          .dx-datagrid-drag-icon {
            &::before {
              color: ${({ theme }) => theme.color.text.primary}
            }
          }
        }
      }

      .dx-command-select {
        text-align: left !important;
        /* transform:translateX(-28px); */
      }

      td:last-child {
        transform: translateX(-52px);
      }

      .dx-editor-cell {
        width: 20px;
      }

      .dx-selection {
        td {
          background-color: transparent !important;
          color: ${({ theme }) => theme.color.text.primary} !important;
          border-color: ${({ theme }) => theme.color.steel.grey_06} !important;
        }
      }

      .dx-select-checkboxes-hidden {
        tbody {
          tr {
            height: 20px;
            td {
              border: 0 !important;

              .dx-select-checkbox {
                display: inline-block;
              }
            }
          }
        }
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

  .dx-checkbox-checked {
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

  .dx-checkbox-indeterminate {
    &.dx-state-hover {
      .dx-checkbox-icon {
        background: ${({ theme }) => theme.color.semantic.positive_80};
        border: 1px solid ${({ theme }) => theme.color.semantic.positive_80};
      }
    }

    &.dx-state-focused {
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
