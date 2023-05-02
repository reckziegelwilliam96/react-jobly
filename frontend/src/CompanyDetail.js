import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import JoblyApi from "./api";
import "./CompanyDetail.css"; // Import the CSS file

const CompanyDetail = () => {
  const { handle } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState({});

  useEffect(() => {
    async function getCompany(handle) {
      setIsLoading(true);
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
      setIsLoading(false);
    }

    getCompany(handle);
  }, [handle]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="CompanyDetail">
      <h2>{company.name}</h2>
      <p className="company-description">{company.description}</p>
      <div className="CompanyDetail-jobs">
        {company.jobs.map(job => (
          <div className="JobCard" key={job.id}><JobCard title={job.title} salary={job.salary} equity={job.equity}/></div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetail;
