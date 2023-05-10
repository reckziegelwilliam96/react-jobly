import React, { useState, useEffect, useContext, useCallback } from "react";
import JobList from "./JobList";
import SearchForm from "./SearchForm";
import CPagination from "./Pagination";
import { UserContext } from "./UserContext";
import JoblyApi from "./api";
import "./Jobs.css";

const Jobs = () => {
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1);

  const getJobs = useCallback(async (q = {}) => {
    setIsLoading(true);
    let jobsPromise = JoblyApi.getJobs({ ...q, page: currentPage, itemsPerPage: 20 });
    const jobsData = await jobsPromise;
    setJobs(jobsData.jobs);
    setTotalItems(jobsData.totalCount);
    setItemsPerPage(jobsData.itemsPerPage);
    setIsLoading(false);
  }, [currentPage]);
  

  const handleSearch = async (q) => {
    await getJobs({ title: q });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = totalItems && itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 1;


  useEffect(() => {
    getJobs();
  }, [getJobs]);

  console.log(totalItems, itemsPerPage, totalPages);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="JobList">
      <h2>Jobs</h2>
      <div className="JobList-searchform">
        <SearchForm onSubmit={handleSearch} />
      </div>
      <div className="JobList-pagination">
        <CPagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages} />
      </div>
      <div className="JobList-list">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};
export default Jobs;
