import React, { useState, useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import JoblyApi from "./api";
import { AuthContext, UserContext } from "./UserContext";
import "./JobCard.css";

const JobCard = ({ id, title, salary, equity }) => {
  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  const [hasApplied, setHasApplied] = useState(false);

  const applyForJob = async () => {
    if (!hasApplied) {
      await JoblyApi.applyForJob(currentUser.username, id, token);
      setHasApplied(true);
    }
  };

  return (
    <div className="JobCard">
      <Card>
        <CardBody className="text-center">
          <CardTitle>{title}</CardTitle>
          <CardText>Salary: {salary}</CardText>
          <CardText>Equity: {equity}</CardText>
          <Button color="danger" onClick={applyForJob} disabled={hasApplied}>
            {hasApplied ? "Applied" : "Apply"}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;
