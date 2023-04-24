import React from "react";

const CompanyList = ({companies}) => {
    return (
    <div className="CompanyList">
        {/* Iterate through companies to get job and create CompanyCard */}

        <CompanyCard company={company}/>
    </div>
    )
}

export default CompanyList;