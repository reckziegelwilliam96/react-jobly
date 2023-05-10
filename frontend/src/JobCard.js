import React, { useState, useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import JoblyApi from "./api";
import { AuthContext, UserContext } from "./UserContext";
import "./JobCard.css";

const JobCard = ({ id, title, salary, equity }) => {
  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  const [hasApplied, setHasApplied] = useState(false);

  const handleApply = async () => {
    JoblyApi.token = token;

    if (hasApplied) {
      try {
        await JoblyApi.unapplyToJob(currentUser.username, id);
      } catch (err) {
        console.error("Error unapplying to the job:", err);
      }
    } else {
      await JoblyApi.applyForJob(currentUser.username, id);
    }

    setHasApplied(!hasApplied);
  };

  return (
    <div className="JobCard">
      <Card>
        <CardBody className="text-center" key={id}>
          <CardTitle>{title}</CardTitle>
          <CardText>Salary: {salary}</CardText>
          <CardText>Equity: {equity === null || equity === "0" ? "NA" : equity}</CardText>
          <Button onClick={handleApply} color={hasApplied ? "secondary" : "danger"}>
            {hasApplied ? "Applied" : "Apply"}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;
