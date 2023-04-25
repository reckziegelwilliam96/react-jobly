import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import JoblyApi from "./api";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCompaniesAndJobs() {
      let companiesPromise = JoblyApi.getCompanies();
      let jobsPromise = JoblyApi.getJobs();

      const [companies, jobs] = await Promise.all([companiesPromise, jobsPromise]);

      setCompanies(companies);
      setJobs(jobs);
      setIsLoading(false);
    }
    getCompaniesAndJobs();
  })

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div className="App">
      <Routes companies={companies} jobs={jobs} />
    </div>
  );
}

export default App;
