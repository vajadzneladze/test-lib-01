import { DataGrid } from 'devextreme-react/data-grid';
import React, { useEffect, useState } from "react";
import { StyledGridContainer } from "./StyledGrid";
import { GridProps } from "./Grid.types";
import {
  Column,
  FilterRow,
  MasterDetail,
  Pager,
  Paging,
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";



const createCustomStore = (fetchData: any, primaryKey: string) => {
  return new CustomStore({
    key: primaryKey,
    load: async (loadOptions) => {
      const data = await fetchData(loadOptions);

      return {
        data: data.data,
        totalCount: data.totalCount,
        // summary: data.summary,
        // groupCount: data.groupCount
      };
    },
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

    if (fetchData && primaryField && dataSource === null) {
      const customStore = createCustomStore(fetchData, primaryField);
      setDataSource(customStore);
    }
  }, [fetchData, primaryField]);

  return (
    <StyledGridContainer style={style}>
      <DataGrid
        dataSource={dataSource}
        remoteOperations={true}
        columnAutoWidth={false}
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
                filterOperations = { item.filterOperations }
              />
            );
          })}
      </DataGrid>
    </StyledGridContainer>
  );
};

Grid.defaultProps = defaultProps;

export default Grid;
