import React from "react";
import JobSearchForm from "./JobSearchForm"
import JobList from "./JobList"

const Jobs = ({jobs}) => {
    return (
        // Create a click event
        <div className="CompanyList">
            <div className="CompanyList-form">
                <JobSearchForm/>
            </div>
            <div className="CompaniesList-list">
                <JobList jobs={jobs}/>
            </div>
        </div>
    );
}

export default Jobs;