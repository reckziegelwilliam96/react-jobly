import React, { useContext } from "react";
import JobCard from "./JobCard";
import { UserContext } from "./UserContext";

const JobList = ({jobs}) => {
    const { currentUser } = useContext(UserContext);
    
    return(
        <div className="JobsList">
            {/* Iterate through jobs to get job and create JobCard */}
            
            <ul>
                {jobs.map(job => (
                    
                    <li key={job.id}><JobCard id={job.id} title={job.title} salary={job.salary} equity={job.equity} companyName={job.companyName} currentUser={currentUser}/></li>
                ))}
            </ul>
        </div>
    );

}
export default JobList;