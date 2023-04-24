export interface GridDragProps {
  columns: any[];
  selectColumnHandler: (e: any) => void;
  onReorder: (e: any) => void;
  isOpen?: boolean;
}
