import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CompanyCard = ({ handle, name, description, logoUrl }) => {
  return (
    <section className="col-md-8">
      <Link to={`/companies/${handle}`}>
        <Card>
          <CardBody className="text-center">
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
          <img alt={name} src={logoUrl} />
        </Card>
      </Link>
    </section>
  );
};

export default CompanyCard;
