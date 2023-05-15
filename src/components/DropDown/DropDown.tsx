import React, { useEffect, useRef, useState } from 'react';
import DropDownBox, { DropDownBox as DxDropDownBox, IDropDownBoxOptions } from "devextreme-react/drop-down-box";
import { TreeView } from 'devextreme-react';
import Tree from '../Tree/Tree';
import DataSource from 'devextreme/data/data_source';
import { StyledDropDown } from './StyledDropDown';
import { DropDownProps } from './DropDown.types';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';


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
    options: [],

    mainKey: "id",
    parentKey: "parentId",
    labelKey: "text",
    selectionMode: "single",
    showCheckBoxesMode: "none",
    selectAllChild: false,
    dataStructure: "tree",
    searchMode: "contains",
    searchEnabled: false,
    searchKey: "",
    searchValue: "",
};


const DropDown = ({
    label,
    value,
    size,
    status,
    style,
    disabled,
    onChangeHandler,
    options,
    mainKey,
    parentKey,
    selectionMode,
    showCheckBoxesMode,
    selectAllChild,
    labelKey,
    dataStructure,
    searchMode,
    searchEnabled,
    searchKey,
    searchValue
}: DropDownProps) => {

    const [selectedVals, setSelectedVals] = useState([]);
    const [treeSelectedVals, setTreeSelectedVals] = useState([]);
    const treeRef = useRef<TreeView>(null);

    const clearHandler = () => {
        treeSelectedVals.forEach((item: any) => {
            if (treeRef && treeRef.current) {
                treeRef.current.instance.unselectItem(item);
            }
        })

        if (onChangeHandler) {
            onChangeHandler([]);
        }

        setSelectedVals([]);
        setTreeSelectedVals([]);
    }


    const applyFilterHandler = () => {

        if (onChangeHandler) {

            onChangeHandler(treeSelectedVals);
        }
        setSelectedVals(treeSelectedVals);
    }
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
                dataSource={options}
                // disabled
                // onValueChanged={(data: any) => console.log(data)}
                dropDownButtonRender={(e: any) => <div></div>}
                // contentRender={() => renderContent()}
                contentRender={() => <>
                    <Tree
                        treeRef={treeRef}
                        data={options}
                        selectionMode={selectionMode}
                        selectAllChild={selectAllChild}
                        labelKey={labelKey}
                        showCheckBoxesMode={showCheckBoxesMode}
                        parentKey={parentKey}
                        dataStructure={dataStructure}
                        searchMode={searchMode}
                        size={size}
                        mainKey={mainKey}
                        searchEnabled={searchEnabled}
                        onChangeHandler={items => setTreeSelectedVals(items)}
                        searchKey={searchKey}

                    />
                    <div className='drop-down-apply-btn' >
                        <p onClick={clearHandler}>Clear All</p>
                        <Button text='Apply filter' size='small' disabled={treeSelectedVals.length > 0 ? false : true} onClick={applyFilterHandler} />
                    </div>
                </>
                }
            />

            <div className="selections">
                {selectedVals.length > 3 && `(+${selectedVals.length - 3})`}
            </div>

        </StyledDropDown>
    )
}

DropDown.defaultProps = defaultProps;

export default DropDown;