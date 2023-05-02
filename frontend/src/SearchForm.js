import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import "./SearchForm.css"

const SearchForm = ({ onSubmit }) => {
  const initialState = {
    q: ""
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
    onSubmit(formData.q).finally(() => setIsLoading(false));
    setFormData(initialState);
  };

  return (
    <div className="SearchForm">
      <h5>Filter Search:</h5>
      <Form onSubmit={handleSubmit}>
        <Input
          id="q"
          name="q"
          type="text"
          placeholder="Enter search term..."
          value={formData.q}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Button color="primary" disabled={isLoading}>Submit</Button>
      </Form>
    </div>
  );
};

export default SearchForm;
