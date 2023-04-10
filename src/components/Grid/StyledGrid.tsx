import styled from "styled-components";

export const StyledGridContainer = styled.div`

  .dx-datagrid .dx-row {
    height: 51px !important;
  }

  .dx-datagrid .dx-row > td {
    padding: 15px !important;
  }

  .dx-datagrid-rowsview .dx-row {
    transition: background-color 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.color.steel.grey_00};
    border-bottom: 1px solid ${({ theme }) => theme.color.steel.grey_06};

    td {
      border-left-width: 0px;
      border-right-width: 0px;
      padding: 15px !important;
    }
  }

  .dx-selection > td {
    background-color: #e7faff !important;
    color: ${({ theme }) => theme.color.text.primary} !important;
    border-color: ${({ theme }) => theme.color.steel.grey_06} !important;
  }

  .dx-datagrid-rowsview .dx-row:hover {
    background-color: ${({ theme }) => theme.color.steel.grey_02};
  }

  .dx-datagrid-rowsview .dx-row-focused > td {
    background-color: #e7faff !important;
    color: ${({ theme }) => theme.color.text.primary} !important;
    border-color: ${({ theme }) => theme.color.steel.grey_06} !important;
  }

  .dx-header-row {
    background-color: ${({ theme }) => theme.color.steel.grey_05};
    border-width: 0px 0px 1px 1px;

    td {
      color: ${({ theme }) => theme.color.text.primary};
      font-size: ${({ theme }) => theme.typography.fontSize.fs_12px};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      line-height: ${({ theme }) => theme.typography.lineHeight.md};
      border-left-width: 0px;
      border-right-width: 0px;
    }
  }
`;
