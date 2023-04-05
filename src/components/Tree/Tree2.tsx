// import React, { useState } from 'react';
// import { SelectBox } from 'devextreme-react/select-box';
// import styled from 'styled-components';


// export interface OptionData {
//   id: number;
//   text: string;
// }

// export interface MultiSelectProps {
//   options: OptionData[];
//   value: number[];
//   onChange: (value: number[]) => void;
// }

// const Tree: React.FC<MultiSelectProps> = ({ options, value, onChange }) => {
//   const [selectedItems, setSelectedItems] = useState(value);

//   const handleSelectionChanged = (e: any) => {
//     setSelectedItems(e.value);
//     onChange(e.value);
//   };

//   return (
//     <StyledMultiSelect>
//       <SelectBox
//         dataSource={options}
//         value={selectedItems}
//         valueExpr="id"
//         displayExpr="text"
//         showSelectionControls={true}
//         showDropDownButton={true}
//         searchEnabled={true}
//         searchMode="contains"
//         onValueChanged={handleSelectionChanged}
//       />
//     </StyledMultiSelect>
//   );
// };

// const StyledMultiSelect = styled.div`
//   .dx-selectbox {
//     width: 100%;
//   }
// `;

// export default Tree;
