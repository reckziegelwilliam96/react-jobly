import React, { useState, useEffect } from "react";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import "./Companies.css"

const Companies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  async function getCompanies(q = {}) {
    setIsLoading(true);
    let companiesPromise = await JoblyApi.getCompanies(q);
    const companies = await companiesPromise;
    setCompanies(companies);
    setIsLoading(false);
  }

  const handleSearch = async (q) => {
    getCompanies(q);
  };

  useEffect(() => {
    getCompanies();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="CompanyList">
      <h2>Companies</h2>
      <div className="CompanyList-searchform">
        <SearchForm onSubmit={handleSearch} />
      </div>
      <div className="CompaniesList-list">
        <CompanyList companies={companies} />
      </div>
    </div>
  );
};

export default Companies;
