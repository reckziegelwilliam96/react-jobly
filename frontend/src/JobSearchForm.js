import React from "react";
import SearchForm from "./SearchForm";


const JobSearchForm = ({q}) => {

    return (
        <div className="JobSearchForm">
            <SearchForm route={jobs} query={q}/>
        </div>
    )
}