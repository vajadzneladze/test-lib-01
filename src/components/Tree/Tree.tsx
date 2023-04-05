import TreeView from 'devextreme-react/tree-view';
import React from 'react';
import TreeItem from './TreeItem';
import styled from 'styled-components';
import { TreeProps } from './Tree.types';

const StyledTree = styled(TreeView)`
  /* 
    background:white;
    max-height:200px; */

  .dx-treeview-item {
    /* font-size: 16px;
    color: #333;
    padding: 10px;
    border-bottom: 1px solid #ccc; */
  }

  .dx-treeview-item-selected {
    /* background-color: #f5f5f5; */
  }
`;



const defaultProps: TreeProps = {
  data: [],
  mainKey: 'id',
  parentKey: 'parentId',
  labelKey: 'text',
  selectionMode: 'single',
  showCheckBoxesMode: 'none',
  selectAllChild: false,
  dataStructure: 'tree',
};

const Tree = ({
  data,
  mainKey,
  parentKey,
  labelKey,
  selectionMode,
  showCheckBoxesMode,
  selectAllChild,
  dataStructure,
  ...props
}: TreeProps) => {
  const treeViewItemSelectionChanged = (e: any) => {
    // console.log(e.component.getSelectedNodeKeys());
  };

  /** ხე მზად არის დასახატად */
  const syncTreeViewSelection = (e: any) => {
    console.log(e);

    //     const treeView:any = (e.component.selectItem && e.component)
    //       || (treeView && treeView.instance);
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
    //   syncDataGridSelection(e) {
    //     this.setState({
    //       gridBoxValue: e.value || [],
    //     });
    //   }
    //   treeViewItemSelectionChanged(e) {
    //     this.setState({
    //       treeBoxValue: e.component.getSelectedNodeKeys(),
    //     });
    //   }
    //   dataGridOnSelectionChanged(e) {
    //     this.setState({
    //       gridBoxValue: (e.selectedRowKeys.length && e.selectedRowKeys) || [],
    //     });
    //   }
  };

  return (
    <StyledTree
      dataSource={data}
      itemRender={(item) => <TreeItem showIcon = { showCheckBoxesMode === 'none' } name = { item[labelKey] } {...item} />}
      dataStructure={ dataStructure }
      animationEnabled={false}
      keyExpr={mainKey}
      parentIdExpr={parentKey}
      selectionMode={selectionMode}
      showCheckBoxesMode={showCheckBoxesMode}
      selectNodesRecursive={selectAllChild}
      displayExpr = {'title'}
      selectByClick={true}
      onContentReady={syncTreeViewSelection}
      onItemSelectionChanged={treeViewItemSelectionChanged}
      //   onItemClick = { e => { console.log(e) } } // არჩევისდროს დაკლიკვის ივენთი
      //   onItemCollapsed={ e => { console.log('ჩაიკეცა', e)  } } // დაკეცვის დროს ივენთი
      // onItemExpanded = { e => { console.log('ჩამოიშალა' , e) } } // ჩამოშლის დროს ივენთი
      //   onItemRendered={  e=> <TreeItem />} // ხის დარენდერების ივენთი
      // onOptionChanged = { e => { console.log('datis cvlilebis', e.name) } } // რა ივენთი მოხდა , hover , focus...
      // rtlEnabled = { true } // მარჯვნიდან მარცხნივ მიმართულებით რენდერი
      // height = '200px' // ხის სიმაღლე
      width='100%' // ხის სიგანე
      // accessKey = 'what'
      // activeStateEnabled = { true }
      // disabled = {true}
      // focusStateEnabled = {false}
      // hint='This is the hint for this tree'
      // hoverStateEnabled = { true }
      // tabIndex={1}
      visible={true} // დამალვა გამოჩენა მთლიანი ხის
      {...props}
    />
  );
};

Tree.defaultProps = defaultProps;

export default Tree;
