// import { DataGrid } from "devextreme-react";
// import React, { useState } from "react";
// import { StyledGridContainer } from "./StyledGrid";
// import { GridProps } from "./Grid.types";
// import {
//   Column,
//   Editing,
//   Export,
//   FilterRow,
//   GroupItem,
//   GroupPanel,
//   MasterDetail,
//   Pager,
//   Paging,
//   Scrolling,
//   Selection,
//   Summary,
//   TotalItem,
//   ValueFormat,
// } from "devextreme-react/data-grid";
// import Text from "../Text/Text";
// import GridMasterTemplate from "./GridMasterTemplate";
// import { exportDataGrid } from 'devextreme/excel_exporter';
// import { Workbook } from 'exceljs';
// import { saveAs } from 'file-saver-es';
// import CustomStore from "devextreme/data/custom_store";

// const defaultProps: GridProps = {
//   selectMode: "single",
//   selectedItems: [],
//   primaryField: "id",
//   data: [],
//   columns: [],
//   withFilter: false,
//   onRowClick: (e) => { },
//   style: {},
//   hasDetails: false,
// };



// const isNotEmpty = (value: any) => {
//   return value !== undefined && value !== null && value !== '';
// }

// const store = new CustomStore({
//   key: 'ID',
//   load(loadOptions: any) {
//     // let params:any = {};

//     // const fields = [
//     //   'skip',
//     //   'take',
//     //   'requireTotalCount',
//     //   'requireGroupCount',
//     //   'sort',
//     //   'filter',
//     //   'totalSummary',
//     //   'group',
//     //   'groupSummary',
//     // ]

//     // fields.forEach((i) => {
//     //   if (i in loadOptions && isNotEmpty(loadOptions[i])) {
//     //     params[i] = loadOptions[i];
//     //     // params += `${i}=${JSON.stringify(loadOptions[i])}&`;
//     //   }
//     // });

//     // params = params.slice(0, -1);
//     return fetch('https://newadmin.upgaming.dev/api/Organizations/Get' , {
//       method:'POST',
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "bearer fd3642ef-f91c-4a14-ab2f-bbf2e6bd672c",
//         "ug-proxy" : "oneadmin"
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify({...loadOptions})
//     }).then((response: any) => response.json()).then((data) => ({
//       data: data.data,
//       totalCount: 44,
//       summary: data.summary,
//       groupCount: data.groupCount
//     })).catch(() => { throw new Error('Data Loading Error'); })

//   }
// })


// const allowedPageSizes = [8, 12, 20];


// const Grid = ({
//   selectMode,
//   selectedItems,
//   primaryField,
//   data,
//   columns,
//   withFilter,
//   onRowClick,
//   DetailsComponent,
//   style,
//   hasDetails,
// }: GridProps) => {
//   const [selectedRows, setSelectedRows] = useState(() => {
//     if (
//       selectedItems &&
//       selectedItems.length > 0 &&
//       data &&
//       data.length > 0 &&
//       selectMode !== "none"
//     ) {
//       return data.filter((item: any) =>
//         selectedItems.includes(item[primaryField || "id"])
//       );
//     }

//     return [];
//   });

//   const handleSelectionChange = ({ selectedRowsData }: any) => {
//     setSelectedRows(selectedRowsData);
//   };

//   const handleFilterChange = (filters: any) => {
//     // console.log(filters);
//   };

//   // const onSelectionChanged = ({ selectedRowsData }: any) => {
//   //   console.log(selectedRowsData);
//   //   setSelectedRows(selectedRowsData);
//   // };


//   // const onExporting = (e:any) =>  {
//   //   const workbook = new Workbook();
//   //   const worksheet = workbook.addWorksheet('Main sheet');

//   //   exportDataGrid({
//   //     component: e.component,
//   //     worksheet,
//   //     autoFilterEnabled: true,
//   //   }).then(() => {
//   //     workbook.xlsx.writeBuffer().then((buffer) => {
//   //       saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
//   //     });
//   //   });
//   //   e.cancel = true;
//   // }



//   return (
//     <StyledGridContainer style={style}>
//       <DataGrid
//         dataSource={store}
//         remoteOperations={true}

//         keyExpr={primaryField}
//         // defaultColumns={columns}
//         columnAutoWidth={true}
//         selection={{ mode: selectMode }} // single, multiple , none
//         selectedRowKeys={selectedRows.map(
//           (item: any) => item[primaryField || "ID"]
//         )}
//         onSelectionChanged={handleSelectionChange}
//         onFilterPanelChange={handleFilterChange}
//         allowColumnReordering={true}
//       // onExporting={onExporting}
//       >
//         <FilterRow visible={withFilter} />
//         {DetailsComponent && (
//           <MasterDetail enabled={hasDetails} component={DetailsComponent} />
//         )}

//         {/* <Editing
//           allowUpdating={true}
//           allowDeleting={true}
//           selectTextOnEditStart={true}
//           useIcons={true}
//         /> */}

//         {/* <Export
//           enabled={true}
//           formats={["pdf"]}
//           allowExportSelectedData={true}
//         /> */}

//         <Paging defaultPageSize={12} />
//         <Pager
//           showPageSizeSelector={true}
//           allowedPageSizes={allowedPageSizes}
//         />

//         {columns &&
//           columns.length > 0 &&
//           columns.map((item: any, index: any) => {
//             return (
//               <Column
//                 width={item.width || "auto"}
//                 key={index}
//                 allowFiltering={item.allowFiltering}
//                 allowSorting={item.allowSorting}
//                 dataField={item.dataField}
//                 caption={item.caption}
//                 alignment={item.align || "left"}
//                 cellRender={item.renderColumn}
//               />
//             );
//           })}

//         {/* <FilterRow visible={withFilter} /> */}

//         {/* <GroupPanel visible={true} /> */}
//         {/* <Scrolling mode="virtual" /> */}
//         {/* <Editing
//                       mode="row"
//                       allowAdding={true}
//                       allowDeleting={true}
//                       allowUpdating={true}
//                     /> */}
//         {/* 
//                       <Summary>
//                           <TotalItem column="ID" summaryType="sum">
//                             <ValueFormat type="decimal" precision={2} />
//                           </TotalItem>

//                           <GroupItem column="Freight" summaryType="sum">
//                             <ValueFormat type="decimal" precision={2} />
//                           </GroupItem>

//                           <GroupItem summaryType="count" />

//                         </Summary> */}
//       </DataGrid>
//     </StyledGridContainer>
//   );
// };

// Grid.defaultProps = defaultProps;

// export default Grid;
