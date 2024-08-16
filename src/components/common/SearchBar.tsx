// SearchBar.tsx
import React, { useState } from "react";
import { TextInput, Button, Flex } from "@mantine/core";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Flex align="center" gap="md">
      <TextInput
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        style={{ flexGrow: 1 }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Button onClick={handleSearch}>검색</Button>
    </Flex>
  );
};

export default SearchBar;
