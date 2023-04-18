import { DataGrid } from "devextreme-react";
import React, { useEffect, useState } from "react";
import { StyledGridContainer } from "./StyledGrid";
import { GridProps } from "./Grid.types";
import {
  Column,
  Editing,
  Export,
  FilterRow,
  GroupItem,
  GroupPanel,
  MasterDetail,
  Pager,
  Paging,
  Scrolling,
  Selection,
  Summary,
  TotalItem,
  ValueFormat,
} from "devextreme-react/data-grid";
import Text from "../Text/Text";
import GridMasterTemplate from "./GridMasterTemplate";
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
import CustomStore from "devextreme/data/custom_store";




const createCustomStore = (fetchData: any, primaryKey: string) => {

  return new CustomStore({
    key: primaryKey,
    load: (loadOptions: any) => fetchData(loadOptions)
  });
}


const defaultProps: GridProps = {
  selectMode: "single",
  selectedItems: [],
  primaryField: "id",
  data: [],
  columns: [],
  withFilter: false,
  onRowClick: (e) => { },
  style: {},
  hasDetails: false,
  fetchData: () => { }
};


const allowedPageSizes = [8, 12, 20];


const Grid = ({
  selectMode,
  selectedItems,
  primaryField,
  data,
  columns,
  withFilter,
  onRowClick,
  DetailsComponent,
  style,
  hasDetails,
  fetchData
}: GridProps) => {


  const [selectedRows, setSelectedRows] = useState(() => {
    if (
      selectedItems &&
      selectedItems.length > 0 &&
      data &&
      data.length > 0 &&
      selectMode !== "none"
    ) {
      return data.filter((item: any) =>
        selectedItems.includes(item[primaryField || "id"])
      );
    }

    return [];
  });

  const [dataSource, setDataSource] = useState<any>(null);


  useEffect(() => {

    console.log(fetchData, primaryField)
    if (fetchData && primaryField) {
      const customStore = createCustomStore(fetchData, primaryField);
      setDataSource(customStore);
    }
  }, [fetchData, primaryField]);



  return (
    <StyledGridContainer style={style}>
      <DataGrid
        dataSource={dataSource}
        remoteOperations={true}
        keyExpr={primaryField}
        columnAutoWidth={true}
        selection={{ mode: selectMode }}
        selectedRowKeys={selectedRows.map(
          (item: any) => item[primaryField || "id"]
        )}
        allowColumnReordering={true}
      >
        <FilterRow visible={withFilter} />
        {DetailsComponent && (
          <MasterDetail enabled={hasDetails} component={DetailsComponent} />
        )}

        <Paging defaultPageSize={12} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
        />

        {columns &&
          columns.length > 0 &&
          columns.map((item: any, index: any) => {
            return (
              <Column
                width={item.width || "auto"}
                key={index}
                allowFiltering={item.allowFiltering}
                allowSorting={item.allowSorting}
                dataField={item.dataField}
                caption={item.caption}
                alignment={item.align || "left"}
                cellRender={item.renderColumn}
              />
            );
          })}

        {/* <FilterRow visible={withFilter} /> */}

        {/* <GroupPanel visible={true} /> */}
        {/* <Scrolling mode="virtual" /> */}
        {/* <Editing
                      mode="row"
                      allowAdding={true}
                      allowDeleting={true}
                      allowUpdating={true}
                    /> */}
        {/* 
                      <Summary>
                          <TotalItem column="ID" summaryType="sum">
                            <ValueFormat type="decimal" precision={2} />
                          </TotalItem>

                          <GroupItem column="Freight" summaryType="sum">
                            <ValueFormat type="decimal" precision={2} />
                          </GroupItem>

                          <GroupItem summaryType="count" />

                        </Summary> */}
      </DataGrid>
    </StyledGridContainer>
  );
};

Grid.defaultProps = defaultProps;

export default Grid;
