import React, { useState, useEffect, useContext, useCallback } from "react";
import JobList from "./JobList";
import SearchForm from "./SearchForm";
import CPagination from "./Pagination";
import { UserContext } from "./UserContext";
import JoblyApi from "./api";
import "./Jobs.css"

const Jobs = () => {
    const { currentUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);   
    const [currentPage, setCurrentPage] = useState(1);

    const getJobs = useCallback(async (q = {}) => {
      setIsLoading(true);
      let jobsPromise = JoblyApi.getJobs({ ...q, page: currentPage });
      const jobs = await jobsPromise;
      console.log("Received jobs:", jobs); 
      setJobs(jobs);
      setIsLoading(false);
    }, [currentPage]);
    

    const handleSearch = async (q) => {
      getJobs(q)
    };

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    useEffect(() => {
        getJobs();
      }, [getJobs]);

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
          <CPagination currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
        <div className="JobList-list">
          <JobList jobs={jobs} />
        </div>
        
      </div>
    );
  };
export default Jobs;
