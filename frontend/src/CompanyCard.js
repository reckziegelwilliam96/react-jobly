import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CompanyCard = ({ company }) => {
    return (
    <section className="col-md-8">
        <Card exact to={`/company/${handle}`}>
          <CardBody className="text-center">
            <CardTitle>
                {company.name}
            </CardTitle>
            <CardText>
                {company.description}
            </CardText>
          </CardBody>
          <img src={company.logoUrl} />
        </Card>
    </section>
    )
}

export default CompanyCard;