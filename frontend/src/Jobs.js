import React, { useState, useEffect, useContext } from "react";
import JobList from "./JobList";
import SearchForm from "./SearchForm";
import { UserContext } from "./UserContext";
import JoblyApi from "./api";
import "./Jobs.css"

const Jobs = () => {
    const { currentUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);   

    async function getJobs(q = {}) {
        setIsLoading(true)
        let jobsPromise = JoblyApi.getJobs(q);
        const jobs = await jobsPromise;
        setJobs(jobs);
        setIsLoading(false);
    };

    const handleSearch = async (q) => {
      getJobs(q)
    };

    useEffect(() => {
        getJobs();
      }, []);

    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

      return (
        <div className="JobList">
          <h2>Jobs</h2>
          <div className="JobList-searchform">
              <SearchForm onSubmit={handleSearch} />
          </div>
          <div className="JobList-list">
              <JobList jobs={jobs} currentUser={currentUser} />
          </div>
        </div>
      );
    };
export default Jobs;