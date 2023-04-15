export interface GridProps {
  selectMode?: "none" | "single" | "multiple";
  selectedItems: any[];
  primaryField?: string | undefined;
  data: any[];
  withFilter?: boolean;
  columns: any[];
  onRowClick?: (e: any) => void;
  style?: React.CSSProperties;
}
