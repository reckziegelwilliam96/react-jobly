import React, { useState, useEffect, useContext } from "react";
import JobList from "./JobList";
import JoblyApi from "./api";
import "./Applications.css";
import { UserContext } from "./UserContext";

const Applications = () => {
    const { currentUser, token } = useContext(UserContext);
    const [applied, setApplied] = useState([]);

  useEffect(() => {
    const getApplications = async () => {
        JoblyApi.token = token;
        const applications = await JoblyApi.getApplications(currentUser.username);
        setApplied(applications);
    };
    getApplications();
  }, []);

  return (
    <div className="Applications">
      <h2>Companies You've Applied To:</h2>
      <JobList jobs={applied} />
    </div>
  );
};

export default Applications;
