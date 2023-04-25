import React from "react";
import CompanyCard from "./CompanyCard";

const CompanyList = ({companies}) => {
    return (
    <div className="CompanyList">
        <div>
            {companies.map(company => (
                <div className="CompanyCard" key={company.handle}><CompanyCard company={company}/></div>
            ))}
        </div>
        
    </div>
    )
}

export default CompanyList;