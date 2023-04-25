import React from "react";
import CompanyCard from "./CompanyCard";

const CompanyList = ({companies}) => {
    return (
    <div className="CompanyList">
        {/* Iterate through companies to get job and create CompanyCard */}
        <ul>
            {companies.map(company => (
                <li key={company.handle}><CompanyCard company={company}/></li>
            ))}
        </ul>
        
    </div>
    )
}

export default CompanyList;