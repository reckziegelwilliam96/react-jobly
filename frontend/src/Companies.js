import React from "react";
import CompanyList from "./CompanyList"
import CompanySearchForm from "./CompanySearch";

const Companies = ({companies}) => {

    return (
        // Create a click event
        <div className="CompanyList">
            <div className="CompanyList-form">
                <CompanySearchForm />
            </div>
            <div className="CompaniesList-list">
                <CompanyList companies={companies}/>
            </div>
        </div>
    )
}

export default Companies;