import { DataGrid } from "devextreme-react";
import React, { useState } from "react";
import { StyledGridContainer } from "./StyledGrid";
import { GridProps } from "./Grid.types";

const defaultProps: GridProps = {
  selectMode: "single",
  selectedItems: [],
  primaryField: "id",
  data: [],
  columns: [],
  onRowClick: (e) => console.log(e.data),
};

const Grid = ({
  selectMode,
  selectedItems,
  primaryField,
  data,
  columns,
  onRowClick,
}: GridProps) => {
  

  const [selectedRows, setSelectedRows] = useState(() => {
    if (selectedItems && selectedItems.length > 0 && data && data.length > 0 && selectMode !== 'none') {
      return data.filter((item: any) =>
        selectedItems.includes(item[primaryField || "id"])
      );
    }

    return [];
  });

  const onSelectionChanged = ({ selectedRowsData }: any) => {
    console.log(selectedRowsData);
    setSelectedRows(selectedRowsData);
  };
  

  return (
    <StyledGridContainer>
      <DataGrid
        dataSource={data}
        keyExpr="ID"
        defaultColumns={columns}
        selection={{ mode: selectMode }} // single, multiple , none
        selectedRowKeys={selectedRows.map((item: any) => item.ID)}
        onSelectionChanged={onSelectionChanged}
        columnAutoWidth={true}
        // showBorders={true}
        // onRowClick={(e) => onClickHandlr(e) }
        // focusedRowEnabled={true}
        // focusedRowKey={selectedRow}
        // onSelectionChanged={onSelectionChanged}

        // rowAlternationEnabled={true}
        // hoverStateEnabled={true}
      />
    </StyledGridContainer>
  );
};

Grid.defaultProps = defaultProps;

export default Grid;
