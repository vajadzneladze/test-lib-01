export interface GridProps {
  selectMode?: "none" | "single" | "multiple";
  selectedItems: any[];
  primaryField?: string;
  data: any,
  withFilter?: boolean;
  columns: any[];
  onRowClick?: (e: any) => void;
  style?: React.CSSProperties;
  DetailsComponent?: any,
  hasDetails?: boolean
  // on select
  fetchData?: any
}
