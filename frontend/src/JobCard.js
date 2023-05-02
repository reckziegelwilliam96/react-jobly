import React, { useState, useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import JoblyApi from "./api";
import { AuthContext, UserContext } from "./UserContext";
import "./JobCard.css";

const JobCard = ({ id, title, salary, equity }) => {
    console.log("JobCard id:", id);
  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  const [hasApplied, setHasApplied] = useState(false);


  const applyForJob = async () => {
    if (!hasApplied) {
        JoblyApi.token = token;
        await JoblyApi.applyForJob(currentUser.username, id);
        setHasApplied(true);
    }
  };

  const unapplyToJob = async () => {
    try {
        await JoblyApi.unapplyToJob(currentUser.username, id);
        setHasApplied(false);
    } catch (err) {
        console.error("Error unapplying to the job:", err);
    }
  };

  return (
    <div className="JobCard">
      <Card>
        <CardBody className="text-center" key={id}>
          <CardTitle>{title}</CardTitle>
          <CardText>Salary: {salary}</CardText>
          <CardText>Equity: {equity === null || equity === null || equity === "0" ? "NA" : equity}</CardText>
          {hasApplied ? (
              <Button onClick={unapplyToJob} color="secondary">
                Applied
              </Button>
            ) : (
              <Button onClick={applyForJob} color="danger">
                Apply
              </Button>
            )}
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;
