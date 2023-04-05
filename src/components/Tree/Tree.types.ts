export interface TreeProps {
  data: object[];
  mainKey?: undefined | string;
  parentKey?: undefined | string;
  selectionMode?: "multiple" | "single" | undefined;
  showCheckBoxesMode?: "none" | "normal" | "selectAll";
  selectAllChild?: boolean;
  labelKey: string;
  dataStructure?: "tree" | "plain";
}

export interface TreeItemProps {
  id?: any;
  parentId?: any;
  name?: string;
  icon?: any;
  showIcon?: boolean;
}
