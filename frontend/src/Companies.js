import React, { useState, useEffect, useCallback } from "react";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import CPagination from "./Pagination";
import "./Companies.css"

const Companies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  

    const getCompanies =  useCallback(async (q = {}) => {
      setIsLoading(true);
      let companiesPromise = await JoblyApi.getCompanies({...q, page: currentPage});
      const companies = await companiesPromise;
      setCompanies(companies);
      setIsLoading(false);
    }, [currentPage]);
    

    const handleSearch = async (q) => {
      getCompanies(q);
    };

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    useEffect(() => {
      getCompanies();
    }, [getCompanies]);


    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

  return (
    <div className="CompanyList">
      <h2>Companies</h2>
      <div className="CompanyList-searchform">
        <SearchForm onSubmit={handleSearch} />
      </div>
      <div className="CompanyList-Pagination">
        <CPagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="CompaniesList-list">
        <CompanyList companies={companies} />
      </div>
    </div>
  );
};


export default Companies;
