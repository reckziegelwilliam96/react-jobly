import React from "react";
import JobCard from "./JobCard";

const JobList = ({jobs}) => {
    return(
        <div className="JobsList">
            {/* Iterate through jobs to get job and create JobCard */}
            <JobCard job={job}/>
        </div>
    );

}
export default JobList;