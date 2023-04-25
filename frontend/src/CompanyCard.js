import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CompanyCard = ({ company }) => {
    return (
    <section className="col-md-8">
      <Link to={`/company/${company.handle}`}>
        <Card>
          <CardBody className="text-center">
            <CardTitle>
                {company.name}
            </CardTitle>
            <CardText>
                {company.description}
            </CardText>
          </CardBody>
          <img alt={company.name} src={company.logoUrl} />
        </Card>
      </Link>
    </section>
    )
}

export default CompanyCard;