export interface TreeProps {
  data: object[];
  mainKey?: undefined | string;
  parentKey?: undefined | string;
  selectionMode?: "multiple" | "single" | undefined;
  showCheckBoxesMode?: "none" | "normal" | "selectAll";
  selectAllChild?: boolean;
  labelKey: string;
  dataStructure?: "tree" | "plain";
  searchMode?: 'contains' | 'equals' | 'startswith',
  searchEnabled? : boolean,
  searchKey?: string,
  searchValue?: string | string[]
}

export interface TreeItemProps {
  id?: any;
  parentId?: any;
  name?: string;
  icon?: any;
  showIcon?: boolean;
}
