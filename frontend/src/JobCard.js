import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const JobCard = ({ name, salary, equity }) => {
    return (
        <section className="col-md-8">
            <Card>
              <CardBody className="text-center">
                <CardTitle>
                    {name}
                </CardTitle>
                <CardText>
                    {salary}
                </CardText>
                <CardText>
                    {equity}
                </CardText>
              </CardBody>
            </Card>
        </section>
    );
}

export default JobCard;