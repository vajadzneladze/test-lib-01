export interface GridProps {
  selectMode?: "none" | "single" | "multiple";
  selectedItems: any[];
  primaryField?: string;
  data: any;
  withFilter?: boolean;
  columns: any[];
  onRowClick?: (e: any) => void;
  style?: React.CSSProperties;
  DetailsComponent?: any;
  DetailsComponentFixedHeigh?:boolean, 
  hasDetails?: boolean;
  fetchData?: any;
  onDelete?: (e: any) => void;
  actionHandler?: (action: any, data: any) => void;
  moreActions? : boolean;
  manageColumns?: boolean;
  actionList?: object[] 
}
