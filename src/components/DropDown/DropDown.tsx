import React, { useState } from 'react';
import { DropDownBox as DxDropDownBox } from "devextreme-react/drop-down-box";
import { TreeView } from 'devextreme-react';
import Tree from '../Tree/Tree';
import DataSource from 'devextreme/data/data_source';


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


// const Tree = () => {

//     return <TreeView
//         // ref={(ref) => { this.treeView = ref; }}
//         dataSource={treeDataSource}
//         dataStructure="plain"
//         keyExpr="ID"
//         parentIdExpr="categoryId"
//         selectionMode="multiple"
//         showCheckBoxesMode="normal"
//         selectNodesRecursive={false}
//         displayExpr="name"
//         selectByClick={true}
//         // onContentReady={this.syncTreeViewSelection}
//         // onItemSelectionChanged={this.treeViewItemSelectionChanged}
//     />

// }


// const syncTreeViewSelection = (e:any) =>  {
//     const treeView = (e.component.selectItem && e.component)
//       || (this.treeView && this.treeView.instance);

//     if (treeView) {
//       if (e.value === null) {
//         treeView.unselectAll();
//       } else {
//         const values = e.value || this.state.treeBoxValue;
//         values && values.forEach((value) => {
//           treeView.selectItem(value);
//         });
//       }
//     }

//     if (e.value !== undefined) {
//       this.setState({
//         treeBoxValue: e.value,
//       });
//     }
//   }


const DropDown = () => {

    const [selectedVals, setSelectedVals] = useState([]);

    return (

        <div className="dx-field-value">
            <DxDropDownBox
                value={selectedVals}
                valueExpr="ID"
                displayExpr="name"
                placeholder="Select a value..."
                labelMode="floating"
                label= 'First Name'
                showClearButton={true}
                dataSource={treeDataSource}
                onValueChanged={(data: any) => console.log(data)}
                contentRender={() => <Tree
                    data={treeDataSource}
                    selectionMode="multiple"
                    showCheckBoxesMode="normal"
                    parentKey='categoryId'
                    dataStructure="plain"
                    selectAllChild={true}
                    searchEnabled = { true }
                    mainKey='ID'
                    onChangeHandler={items => setSelectedVals(items)}
                />}
            />
        </div>
    )
}


export default DropDown;