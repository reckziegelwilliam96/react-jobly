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
            {/*  List all jobs from a company. Using company.jobs, create JobCards */}
                <JobCard job={job}/>
            </div>
        </div>

    )
}

export default CompanyDetail;