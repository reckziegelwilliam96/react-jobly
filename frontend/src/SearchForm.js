import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const initialState = {
    search: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    onSubmit(formData.search).finally(() => setIsLoading(false));
    setFormData(initialState);
  };

  return (
    <div className="SearchForm">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Enter search term..."
          value={formData.search}
          onChange={handleChange}
          disabled={isLoading}
        />
        <button disabled={isLoading}>Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
