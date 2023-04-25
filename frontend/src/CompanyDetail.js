import React from "react";
import JobCard from "./JobCard";

const CompanyDetail = ({company}) => {

    return (
        <div className="CompanyDetail">
            <div className="CompanyDetail-name">
                {company.name}
            </div>
            <div className="CompanyDetail-description">
                {company.description}
            </div>
            <div className="CompanyDetail-jobs">
            <ul>
                {company.jobs.map(job => (
                <li key={job.id}><JobCard job={job}/></li>
                ))}
            </ul>
            </div>
        </div>

    )
}

export default CompanyDetail;