import React from "react";
import Text from "../Text/Text";
import { TreeItemProps } from "./Tree.types";
import Icon from "../Icon/Icon";

const defaultProps: TreeItemProps = {
  showIcon: true,
  icon: "",
};

const TreeItem = ({ name, icon, showIcon }: TreeItemProps) => {
  return (
    <div className="tree-node">
      {showIcon && icon !== "" && (
        <Icon name = { icon } size = "xs" style = {{ float:'left',paddingRight:'10px', paddingTop:'4px' }}/>
      )}
      <Text variant="p4" style={{ display: "inline" }}>
        {name}
      </Text>
    </div>
  );
};

TreeItem.defaultProps = defaultProps;

export default TreeItem;
