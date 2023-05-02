import React, { useState } from "react";
import { Input } from "reactstrap";
import { debounce } from "lodash";
import "./SearchForm.css";

const SearchForm = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleSearch = debounce(async (searchTerm) => {
    setIsLoading(true);
    await onSubmit(searchTerm);
    setIsLoading(false);
  }, 300);

  return (
    <div className="SearchForm">
      <h5>Filter Search:</h5>
      <Input
        id="q"
        name="q"
        type="text"
        placeholder="Enter search term..."
        value={searchTerm}
        onChange={handleChange}
        disabled={isLoading}
      />
    </div>
  );
};

export default SearchForm;
