import React from "react";
import JobList from "./JobList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

const Jobs = ({jobs: initialState}) => {
    const [jobs, setJobs] = useState(initialState);

    const getFilteredJobs = async (search) => {
        const filteredJobs = await JoblyApi.getJobs({q: search});
        setJobs(filteredJobs);
      };

      return (
        <div className="JobList">
          <div className="JobList-searchform">
            <SearchForm onSubmit={getFilteredJobs} />
          </div>
          <div className="JobList-list">
            <JobList jobs={jobs} />
          </div>
        </div>
      );
    };

export default Jobs;