import React, { useState, useEffect } from "react";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

const Companies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  async function getCompanies(search = {}) {
    setIsLoading(true);
    let companiesPromise = await JoblyApi.getCompanies(search);
    const companies = await companiesPromise;
    setCompanies(companies);
    setIsLoading(false);
  }

  const handleSearch = async (search) => {
    getCompanies({ q: search });
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="CompanyList">
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
