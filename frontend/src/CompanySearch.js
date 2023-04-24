import React from "react";
import SearchForm from "./SearchForm";


const CompanySearchForm = ({q}) => {


    return (
        <div className="CompanySearchForm">
            <SearchForm route={company} />
        </div>
    )
}

export default CompanySearchForm;