import TreeView from "devextreme-react/tree-view";
import React, { memo, useEffect, useLayoutEffect } from "react";
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
  treeRef,
  onChangeHandler,
  ...props
}: TreeProps) => {

  const treeViewItemSelectionChanged = (e: any) => {

    if (onChangeHandler) {
      onChangeHandler(e.component.getSelectedNodeKeys());
    }
  };

  /** ხე მზად არის დასახატად */
  const syncTreeViewSelection = (e: any) => {
    // console.log(e);
  };



  // useLayoutEffect(() => {
  //   const popUp = document.querySelector('.drop-down-apply-btn') as HTMLElement;
  //   if (popUp) {

  //     setTimeout(() => {
  //       popUp.closest('.dx-overlay-content ').style.top = '30px !important';
  //     }, 1000)


  //   }
  // }, []);
  // popUp.style.transform = 'translate(0px, 100px) !important';
  //       popUp.style.marginTop = '25px !important';

  return (
    <StyledTree
      size={size}
      ref={treeRef}
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
      animationEnabled={true}
      keyExpr={mainKey}
      parentIdExpr={parentKey}
      selectionMode={selectionMode}
      showCheckBoxesMode={showCheckBoxesMode}
      selectNodesRecursive={selectAllChild}
      // displayExpr={labelKey}
      selectByClick={true}
      searchEnabled={searchEnabled}
      searchMode={searchMode}
      searchExpr={searchKey}
      onContentReady={syncTreeViewSelection}
      onItemSelectionChanged={treeViewItemSelectionChanged}
      //   onItemClick = { e => { console.log(e) } } // არჩევისდროს დაკლიკვის ივენთი
      //   onItemCollapsed={ e => { console.log('ჩაიკეცა', e)  } } // დაკეცვის დროს ივენთი
      // onItemExpanded = { e => { console.log('ჩამოიშალა' , e) } } // ჩამოშლის დროს ივენთი
      // onItemRendered={  (e:any ) => console.log(e.component)} // ხის დარენდერების ივენთი
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

const form = [

  {
    data: [],
    selected: [],
    mainKey: ''
    label: 'groups'
  },




]



Tree.defaultProps = defaultProps;

export default memo(Tree);
