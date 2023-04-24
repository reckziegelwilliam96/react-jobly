import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const JobCard = ({ job }) => {
    return (
        <section className="col-md-8">
            <Card>
              <CardBody className="text-center">
                <CardTitle>
                    {job.name}
                </CardTitle>
                <CardText>
                    {job.salary}
                </CardText>
                <CardText>
                    {job.equity}
                </CardText>
              </CardBody>
            </Card>
        </section>
    );
}

export default JobCard;