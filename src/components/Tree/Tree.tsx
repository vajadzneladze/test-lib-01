import TreeView from "devextreme-react/tree-view";
import React, { useEffect } from "react";
import TreeItem from "./TreeItem";
import styled from "styled-components";
import { TreeProps } from "./Tree.types";
import { StyledTree } from "./StyledTree";


const defaultProps: TreeProps = {
  data: [],
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
  size: 'xs',
  onChangeHandler: (data) => { console.log(data, 'default valuees .... ') }
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
  searchEnabled,
  searchMode,
  searchKey,
  searchValue,
  size,
  onChangeHandler,
  ...props
}: TreeProps) => {

  const treeViewItemSelectionChanged = (e: any) => {
    if (onChangeHandler) {

      console.log(e.component);
      onChangeHandler(e.component.getSelectedNodeKeys());
    }

  };

  /** ხე მზად არის დასახატად */
  const syncTreeViewSelection = (e: any) => {
    console.log(e);
  };

  return (
    <StyledTree
      size={size}
      dataSource={data}
      itemRender={(item: any) => (
        <TreeItem
          showIcon={showCheckBoxesMode === "none"}
          icon={item["icon"]}
          name={item[labelKey]}
          {...item}
        />
      )}
      dataStructure={dataStructure}
      animationEnabled={false}
      keyExpr={mainKey}
      parentIdExpr={parentKey}
      selectionMode={selectionMode}
      showCheckBoxesMode={showCheckBoxesMode}
      selectNodesRecursive={selectAllChild}
      displayExpr={"title"}
      selectByClick={true}
      searchEnabled={searchEnabled}
      searchMode={searchMode}
      searchExpr={searchKey}
      onContentReady={syncTreeViewSelection}
      onItemSelectionChanged={treeViewItemSelectionChanged}
      //   onItemClick = { e => { console.log(e) } } // არჩევისდროს დაკლიკვის ივენთი
      //   onItemCollapsed={ e => { console.log('ჩაიკეცა', e)  } } // დაკეცვის დროს ივენთი
      // onItemExpanded = { e => { console.log('ჩამოიშალა' , e) } } // ჩამოშლის დროს ივენთი
      //   onItemRendered={  e=> <TreeItem />} // ხის დარენდერების ივენთი
      // onOptionChanged = { e => { console.log('datis cvlilebis', e.name) } } // რა ივენთი მოხდა , hover , focus...
      // rtlEnabled = { true } // მარჯვნიდან მარცხნივ მიმართულებით რენდერი
      // height = '200px' // ხის სიმაღლე
      width="100%" // ხის სიგანე
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
