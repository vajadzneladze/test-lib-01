import { CSSProperties } from "styled-components";

export type status = "success" | "error" | undefined;
export type size = "xs" | "sm" | "md" | "lg" | undefined;

export interface StyledDropDownProps {
  status?: status | "disabled";
  size?: size;
}

export interface DropDownProps extends StyledDropDownProps {
  label?: string;
  value?: any[];
  style?: CSSProperties;
  disabled?: boolean;
  onChangeHandler?: (e: any) => void;
  options?: any[];

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
  searchValue?: string | string[],




}
