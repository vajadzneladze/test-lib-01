export interface GridProps {
    selectMode?:'none' | 'single' | 'multiple',
    selectedItems: any[],
    primaryField?:  string | undefined,
    data: any[];
    columns: any[];
    onRowClick?: (e: any) => void;
}
   