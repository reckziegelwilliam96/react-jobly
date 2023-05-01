import React, { useState, useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import JoblyApi from "./api";
import { AuthContext, UserContext } from "./UserContext";

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
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>{title}</CardTitle>
          <CardText>{salary}</CardText>
          <CardText>{equity}</CardText>
          <Button onClick={applyForJob} disabled={hasApplied}>
            {hasApplied ? "Applied" : "Apply"}
          </Button>
        </CardBody>
      </Card>
    </section>
  );
};

export default JobCard;
