import React from "react";
import JobCard from "./JobCard";

const CompanyDetail = ({name, description, jobs}) => {

    return (
        <div className="CompanyDetail">
            <div className="CompanyDetail-name">
                {name}
            </div>
            <div className="CompanyDetail-description">
                {description}
            </div>
            <div className="CompanyDetail-jobs">
                {jobs.map(job => (
                <div key={job.id}><JobCard job={job}/></div>
                ))}
            </div>
        </div>
    )
}

export default CompanyDetail;