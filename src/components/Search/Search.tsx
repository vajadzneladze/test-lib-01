import React, { FC, useState } from "react";
import { Autocomplete } from "devextreme-react/autocomplete";
import { Button } from "devextreme-react/button";
// import { SearchOutlined } from '@ant-design/icons';
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position:relative;

 
`;

const SearchInput = styled(Autocomplete)`
  width: 100%;
  margin-right: 16px;
`;

const SearchButton = styled(Button)`
  width: 32px;
  height: 32px;
`;

export interface SearchProps {
  onSearch: (value: string) => void;
  suggestions: string[];
}

const Search: FC<SearchProps> = ({ onSearch, suggestions }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContainer>
      <SearchInput
        dataSource={suggestions}
        value={searchValue}
        onValueChanged={(e) => setSearchValue(e.value)}
        placeholder="Search"
        showClearButton={true}
        dropDownOptions={{ height: "auto" }}
      />
     
    </SearchContainer>
  );
};

export default Search;
