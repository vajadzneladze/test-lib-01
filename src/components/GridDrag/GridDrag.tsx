import { DataGrid } from 'devextreme-react';
import React, { memo, useState } from 'react';
import { GridDragProps } from './GridDrag.types';
import { Column, RowDragging, Scrolling, Sorting } from 'devextreme-react/data-grid';
import { StyledGridDragContainer } from './StyledGridDrag';
import Text from '../Text/Text';
import { getBackgroundColor } from '../Button/StyledButton';


const GridDrag = ({ columns, selectColumnHandler, onReorder, isOpen }: GridDragProps) => {

    // const [data, setData] = useState(columns);
    // const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);


    // const onReorder = (e: any) => {
    //     const visibleRows = e.component.getVisibleRows();
    //     const arr = [...data];

    //     const toIndex = arr.findIndex((item) => item.dataField === visibleRows[e.toIndex].data.dataField);

    //     const fromIndex = arr.findIndex((item) => item.dataField === e.itemData.dataField);

    //     arr.splice(fromIndex, 1);
    //     arr.splice(toIndex, 0, e.itemData);

    //     setData(arr);
    // }

    return (
        <>
            {columns && <StyledGridDragContainer isOpen={isOpen}>
                <DataGrid
                    dataSource={columns}
                    keyExpr="dataField"
                    showBorders={false}
                    selection={{ mode: 'multiple' }}
                    selectedRowKeys={columns && columns.length > 0 ? columns.map(item => item.show ? item.dataField : null) : ['CreatedTime']}
                    onSelectionChanged={(e) => selectColumnHandler(e.selectedRowKeys)}
                    showColumnHeaders={false}
                    height='360'
                    columnAutoWidth={true}
                    columnWidth={100}
                >

                    <RowDragging
                        allowReordering={true}
                        onReorder={onReorder}
                        showDragIcons={true}
                    />
                    <Sorting mode="none" />
                    <Scrolling mode="virtual" />
                    <Column dataField="dataField"  />

                </DataGrid>
            </StyledGridDragContainer>}
        </>
    )
}





export default memo(GridDrag);