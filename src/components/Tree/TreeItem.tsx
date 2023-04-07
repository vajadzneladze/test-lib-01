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
        // <i className={`dx-icon-${icon}`} style={{ paddingRight: "10px" }}></i>

        <Icon />
      )}
      <Text variant="p4" style={{ display: "inline" }}>
        {name}
      </Text>
    </div>
  );
};

TreeItem.defaultProps = defaultProps;

export default TreeItem;
