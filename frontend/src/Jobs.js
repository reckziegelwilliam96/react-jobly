import React, { useState, useEffect, useContext } from "react";
import JobList from "./JobList";
import SearchForm from "./SearchForm";
import { UserContext } from "./UserContext";
import JoblyApi from "./api";

const Jobs = () => {
    const { currentUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);   

    async function getJobs(search = {}) {
        setIsLoading(true)
        let jobsPromise = JoblyApi.getJobs(search);
        const jobs = await jobsPromise;
        setJobs(jobs);
        setIsLoading(false);
    };

    const handleSearch = async (search) => {
      getJobs({ q: search })
    };

    useEffect(() => {
        getJobs();
      }, []);

    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

      return (
        <div className="JobList">
          <div className="JobList-searchform">
            <SearchForm onSubmit={handleSearch} />
          </div>
          <div className="JobList-list">
            <JobList jobs={jobs} currentUser={currentUser}/>
          </div>
        </div>
      );
    };

export default Jobs;