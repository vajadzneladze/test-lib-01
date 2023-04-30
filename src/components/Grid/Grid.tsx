import React, { useEffect, useState } from "react";
import { DataGrid, HeaderFilter } from "devextreme-react/data-grid";
import { StyledGridContainer, StyledGridDragShowButton } from "./StyledGrid";
import { GridProps } from "./Grid.types";
import {
  Column,
  MasterDetail,
  Pager,
  Paging,
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import GridDeleteComponent from "./GridDeleteComponent";
import GridDrag from "../GridDrag/GridDrag";
import Icon from "../Icon/Icon";
import { StyledMasterDetails } from "../Modal/StyledModal";


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
  DetailsComponentFixedHeigh: false
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
  DetailsComponentFixedHeigh
}: GridProps) => {

  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [selectedColumnKeys, setSelectedColumnKeys] = useState<any>(() => columns.map(item => item.dataField));
  const [dataSource, setDataSource] = useState<any>(null);
  const [dataColumns, setDataColumns] = useState(columns);
  const [showDrag, setShowDrag] = useState(false);

  const handleDeleteRows = (keys: any) => {

    setShowDrag(false);

    if (onDelete) {
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


  const columnDragHandler = (e: any) => {
    const visibleRows = e.component.getVisibleRows();
    const arr = [...dataColumns];

    const toIndex = arr.findIndex((item) => item.dataField === visibleRows[e.toIndex].data.dataField);

    const fromIndex = arr.findIndex((item) => item.dataField === e.itemData.dataField);

    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, e.itemData);

    setDataColumns(arr);
  }

  const cols = dataColumns && dataColumns.map(item => {
    const display: boolean = !selectedColumnKeys.includes(item.dataField) ? false : true;
    return {
      ...item,
      show: display
    }
  })


  return (

    <div style={{ position: 'relative' }} onClick={() => { if (showDrag) setShowDrag(false) }}>
      <StyledGridDragShowButton onClick={(e) => {
        e.stopPropagation()
        setShowDrag(prev => !prev) 
      }}>
        <Icon name='AlignHorizontally' size="md" />
      </StyledGridDragShowButton>
      {showDrag && <GridDrag columns={cols} selectColumnHandler={setSelectedColumnKeys} onReorder={columnDragHandler} isOpen={true} />}
      <StyledGridContainer style={style}>
        <GridDeleteComponent selectedRowKeys={selectedRowKeys} handleDeleteRows={handleDeleteRows} />
        <DataGrid
          dataSource={dataSource as CustomStore<any, any>}
          remoteOperations={true}
          columnAutoWidth={false}     
          selection={{ mode: selectedColumnKeys && selectedColumnKeys.length > 0  ? selectMode : 'single' }}
          selectedRowKeys={selectedRowKeys}
          onSelectionChanged={(e) => setSelectedRowKeys(e.selectedRowKeys)}
          allowColumnReordering={false}
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

          {cols &&
            cols.length > 0 &&
            cols.map((item: any, index: any) => {

              return (
                <Column
                  // width={item.width || "auto"} 
                  key={item.dataField}
                  dataField={item.dataField}
                  caption={item.dataField === 'Action' ? '' : item.caption}
                  dataType={item.dataType}
                  cellRender={item.renderColumn}
                  headerCellRender={item.renderHeader}
                  allowFiltering={item.allowFiltering}
                  allowSorting={item.allowSorting}
                  alignment={item.align || "left"}
                  fixed={true}
                  filterOperations={item.filterOperations}
                  visible={item.show}
                >
                  {
                    item.dataField === 'CreateTime' &&
                    <HeaderFilter allowSearch={true} dataSource={datesHeaderFilter}
                    />
                  }
                </Column>
              );
            })}


          {/* 
          <Column
            key={'action'}
            dataField={'action'}
            caption={'action'}
            dataType={'string'}
            cellRender={(data: any) => {

              return (
                <div> here we go</div>
              )
            }}
            headerCellRender={(data: any) => {

              return (
                <div> here you go</div>
              )
            }}
            allowFiltering={false}
            allowSorting={false}
            alignment={'center'}
            fixed={true}
          /> */}



          {DetailsComponent && (
            <MasterDetail
              enabled={hasDetails}
              component={
                (data) => <StyledMasterDetails style={{
                  height: DetailsComponentFixedHeigh ? '336px' : 'auto',
                  overflowY: DetailsComponentFixedHeigh ? 'scroll' : 'visible',
                }}>
                  <DetailsComponent data={data} />
                </StyledMasterDetails>
              } />
          )}

          {/* <Paging defaultPageSize={12} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
        /> */}
        </DataGrid>
      </StyledGridContainer>
    </div >
  );
};

Grid.defaultProps = defaultProps;

export default Grid;
