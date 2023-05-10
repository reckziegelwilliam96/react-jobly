import React, { useState, useEffect, useCallback } from "react";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import CPagination from "./Pagination";
import "./Companies.css"

const Companies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(0); 
    const [currentPage, setCurrentPage] = useState(1);
  

    const getCompanies = useCallback(async (q = {}) => {
      setIsLoading(true);
      let companiesPromise = await JoblyApi.getCompanies({ ...q, page: currentPage, itemsPerPage: 20 }); // Add itemsPerPage here
      const companiesData = await companiesPromise;
      setCompanies(companiesData.companies);
      setTotalItems(companiesData.totalCount);
      setItemsPerPage(companiesData.itemsPerPage);
      setIsLoading(false);
    }, [currentPage]);

    const handleSearch = async (q) => {
      await getCompanies({ name: q });
    };

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalItems / itemsPerPage);

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
          totalPages={totalPages}
        />
      </div>
      <div className="CompaniesList-list">
        <CompanyList companies={companies} />
      </div>
    </div>
  );
};


export default Companies;
