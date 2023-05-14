import React, { useEffect, useRef, useState } from 'react';
import DropDownBox, { DropDownBox as DxDropDownBox, IDropDownBoxOptions } from "devextreme-react/drop-down-box";
import { TreeView } from 'devextreme-react';
import Tree from '../Tree/Tree';
import DataSource from 'devextreme/data/data_source';
import { StyledDropDown } from './StyledDropDown';
import { DropDownProps } from './DropDown.types';
import Icon from '../Icon/Icon';


const treeDataSource = [
    {
        "ID": 1,
        "name": "Stores",
        "expanded": true
    },
    {
        "ID": "1_1",
        "categoryId": 1,
        "name": "Super Mart of the West",
        "expanded": true
    },
    {
        "ID": "1_1_1",
        "categoryId": "1_1",
        "name": "Video Players"
    },
    {
        "ID": "1_1_1_1",
        "categoryId": "1_1_1",
        "name": "HD Video Player",
        "price": 220
    },
    {
        "ID": "1_1_1_2",
        "categoryId": "1_1_1",
        "name": "SuperHD Video Player",
        "price": 270
    },
    {
        "ID": "1_1_2",
        "categoryId": "1_1",
        "name": "Televisions",
        "expanded": true
    },
    {
        "ID": "1_1_2_1",
        "categoryId": "1_1_2",
        "name": "SuperLCD 42",
        "price": 1200
    },
    {
        "ID": "1_1_2_2",
        "categoryId": "1_1_2",
        "name": "SuperLED 42",
        "price": 1450
    },
    {
        "ID": "1_1_2_3",
        "categoryId": "1_1_2",
        "name": "SuperLED 50",
        "price": 1600
    },
    {
        "ID": "1_1_2_4",
        "categoryId": "1_1_2",
        "name": "SuperLCD 55",
        "price": 1750
    },
    {
        "ID": "1_1_2_5",
        "categoryId": "1_1_2",
        "name": "SuperLCD 70",
        "price": 4000
    },
    {
        "ID": "1_1_3",
        "categoryId": "1_1",
        "name": "Monitors"
    },
    {
        "ID": "1_1_3_1",
        "categoryId": "1_1_3",
        "name": "19\""
    },
    {
        "ID": "1_1_3_1_1",
        "categoryId": "1_1_3_1",
        "name": "DesktopLCD 19",
        "price": 160
    },
    {
        "ID": "1_1_4",
        "categoryId": "1_1",
        "name": "Projectors"
    },
    {
        "ID": "1_1_4_1",
        "categoryId": "1_1_4",
        "name": "Projector Plus",
        "price": 550
    },
    {
        "ID": "1_1_4_2",
        "categoryId": "1_1_4",
        "name": "Projector PlusHD",
        "price": 750
    }
];

const defaultProps: DropDownProps = {
    label: "Drop Down Element",
    value: [],
    size: "sm",
    disabled: false,
};


const DropDown = ({ label, value, size, status, style, disabled }: DropDownProps) => {

    const [selectedVals, setSelectedVals] = useState([]);

    return (

        <StyledDropDown size={size} status={status} style={style}>

            <DxDropDownBox
                value={selectedVals}
                valueExpr="ID"
                displayExpr="name"
                placeholder=""
                labelMode="floating"
                label={label}
                showClearButton={selectedVals.length > 0}
                dataSource={treeDataSource}
                // disabled
                // onValueChanged={(data: any) => console.log(data)}
                dropDownButtonRender={(e: any) => <div></div>}
                // contentRender={() => renderContent()}
                contentRender={() => <Tree
                    data={treeDataSource} 
                    selectionMode = "multiple"
                    selectAllChild = {true}
                    showCheckBoxesMode="selectAll"
                    parentKey='categoryId'
                    dataStructure="plain"
                    size={size}
                    searchEnabled={false}
                    mainKey='ID'
                    onChangeHandler={items => setSelectedVals(items)}
                />}

            />

            <div className="selections">
                {selectedVals.length > 2 && `(+${selectedVals.length - 2})`}
            </div>



        </StyledDropDown>
    )
}

DropDown.defaultProps = defaultProps;

export default DropDown;