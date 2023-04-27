import React from "react";
import CompanyCard from "./CompanyCard";

const CompanyList = ({companies}) => {
    return (
    <div className="CompanyList">
        <div>
            {companies.map(company => (
                <div className="CompanyCard" key={company.handle}><CompanyCard handle={company.handle} name={company.name} description={company.description} logoUrl={company.logoUrl} /></div>
            ))}
        </div>
        
    </div>
    )
}

export default CompanyList;