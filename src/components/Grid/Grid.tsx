import React, { useEffect,  useState } from "react";
import { DataGrid, HeaderFilter } from "devextreme-react/data-grid";
import { StyledGridContainer } from "./StyledGrid";
import { GridProps } from "./Grid.types";
import {
  Column,
  MasterDetail,
  Pager,
  Paging,
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import GridDeleteComponent from "./GridDeleteComponent";


const createCustomStore = (
  fetchData: any,
  deleteHandler: any,
  primaryKey: string
) => {
  return new CustomStore({
    key: primaryKey,
    load: async (loadOptions) => {
      const data = await fetchData(loadOptions);

      return {
        data: data.data,
        totalCount: data.totalCount,
        summary: data.summary,
        groupCount: data.groupCount,
      };
    },
    remove: async (key) => {
      // const data = await deleteHandler(key);
    }
  });
};

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
  fetchData: () => { },
  onDelete: () => { },
};

const allowedPageSizes = [8, 12, 20];

const datesHeaderFilter = [{
  text: 'One Week',
  value: ['CreateTime', '<=', '3/15/2023'],
}, {
  text: 'Two Week',
  value: [['CreateTime', '>=', '04-10-2023']],
}, {
  text: 'One Month',
  value: [['CreateTime', '>=', '4/20/2023']],
}, {
  text: 'One Year',
  value: [['CreateTime', '>=', '4/20/2023']],
}];

const Grid = ({
  selectMode,
  primaryField,
  columns,
  withFilter,
  DetailsComponent,
  style,
  hasDetails,
  fetchData,
  onDelete,
}: GridProps) => {

  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [dataSource, setDataSource] = useState<any>(null);

  const handleDeleteRows = (keys: any) => {

    if(onDelete){
      onDelete(selectedRowKeys);
    }
    // console.log("Selected rows:", selectedRowKeys);
    // Remove selected rows from the data store
    keys.forEach((key: any) => {
      dataSource.remove(key);
      // console.log(key);
    });
    // Update the Grid component to reflect the changes
    // setSelectedRowKeys([]);
  };


  // const handleSelectionChanged = (e: any) => {
  //   setSelectedRows(e.selectedRowsData);
  // };

  useEffect(() => {

    if (fetchData && primaryField && dataSource === null) {
      const customStore = createCustomStore(fetchData, onDelete, primaryField);

      setDataSource(customStore);
    }
  }, [fetchData, primaryField, dataSource]);


  return (
    <StyledGridContainer style={style}>
      <GridDeleteComponent selectedRowKeys={selectedRowKeys} handleDeleteRows={handleDeleteRows} />
      <DataGrid
        dataSource={dataSource as CustomStore<any, any>}
        remoteOperations={true}
        columnAutoWidth={false}
        selection={{ mode: selectMode }}
        selectedRowKeys={selectedRowKeys}
        onSelectionChanged={(e) => setSelectedRowKeys(e.selectedRowKeys)}
        allowColumnReordering={true}
        allowColumnResizing={true}
        cellHintEnabled={true}
        onCellPrepared={(e: any) => {
          if (e.rowType === 'data' && e.column.dataType === 'datetime') {
              e.cellElement.innerHTML = ` ${e.cellElement.innerHTML} ` 
          }

          
        }}


      // selectedRowKeys={selectedRows.map(
      //   (item: any) => item[primaryField || "id"]
      // )}
      // onSelectionChanged={handleSelectionChanged}
      >

        <HeaderFilter
          allowSearch={true}
          visible={withFilter}
        />

        {columns &&
          columns.length > 0 &&
          columns.map((item: any, index: any) => {

            return (
              <Column
                // width={item.width || "auto"} 
                key={index}
                dataField={item.dataField}
                caption={item.caption}
                dataType={item.dataType}
                cellRender={ item.renderColumn}
                headerCellRender={item.renderHeader}
                allowFiltering={item.allowFiltering}
                allowSorting={item.allowSorting}
                alignment={item.align || "left"}
                fixed={true}
                filterOperations={item.filterOperations}
              >
                {
                  item.dataField === 'CreateTime' &&
                  <HeaderFilter allowSearch={true} dataSource={datesHeaderFilter}
                  />
                }

              </Column>
            );
          })}

        {DetailsComponent && (
          <MasterDetail enabled={hasDetails} component={DetailsComponent} />
        )}

        {/* <Paging defaultPageSize={12} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
        /> */}
      </DataGrid>
    </StyledGridContainer>
  );
};

Grid.defaultProps = defaultProps;

export default Grid;
