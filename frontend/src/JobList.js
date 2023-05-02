import React, { useContext } from "react";
import JobCard from "./JobCard";
import { UserContext } from "./UserContext";
import "./JobList.css"

const JobList = ({jobs}) => {
    const { currentUser } = useContext(UserContext);
    console.log(jobs.map(job => job.id))
    return(     
        <div className="JobList">      
            <div>
                {jobs.map(job => (
                    <div className="JobCard" key={job.id}>
                        <JobCard id={job.id} title={job.title} salary={job.salary} equity={job.equity} />
                    </div>
                ))}
            </div>
        </div> 
    );

}
export default JobList;
