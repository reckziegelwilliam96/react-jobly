import React from "react";
import JobCard from "./JobCard";

const JobList = ({jobs}) => {
    return(
        <div className="JobsList">
            {/* Iterate through jobs to get job and create JobCard */}
            <ul>
                {jobs.map(job => (
                    <li key={job.id}><JobCard job={job} /></li>
                ))}
            </ul>
        </div>
    );

}
export default JobList;