import { IHeaderFilterProps } from "devextreme-react/data-grid";
import { useState } from "react";
import React from "react";

export interface GridHeaderFilterProps extends IHeaderFilterProps {
  onApplyFilter: (selectedValues: any[]) => void;
}

const GridHeaderFilter = ({
  dataSource,
  onApplyFilter, 
}: GridHeaderFilterProps) => {

  const [selectedValues, setSelectedValues] = useState<any[]>([]);

  const handleSelectAll = () => {
    const allValues = dataSource.map((option: any) => option.value);
    setSelectedValues(allValues);
  };

  const handleClearAll = () => {
    setSelectedValues([]);
  };

  const handleFilterOptionSelected = (value: any) => {
    const index = selectedValues.indexOf(value);
    if (index === -1) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  const handleApplyFilter = () => {
    onApplyFilter(selectedValues);
  };

  return (
    <div>
      {/* Render filter options */}
      {dataSource.map((option: any) => (
        <div key={option.value} onClick={() => handleFilterOptionSelected(option.value)}>
          {option.text}
        </div>
      ))}
      {/* Render buttons */}
      <div>
        <button onClick={handleSelectAll}>Select All</button>
        <button onClick={handleClearAll}>Clear All</button>
        <button onClick={handleApplyFilter}>Apply Filter</button>
      </div>
    </div>
  );
};

export default GridHeaderFilter;
