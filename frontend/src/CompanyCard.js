import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./CompanyCard.css";

const CompanyCard = ({ handle, name, description, logoUrl }) => {
  return (
    <section className="col-lg-12 CompanyCard">
      <Card>
        <CardBody className="card-content">
          <div className="card-text">
            <CardTitle>
              <Link to={`/companies/${handle}`} className="card-link">
                {name}
              </Link>
            </CardTitle>
            <CardText>{description}</CardText>
          </div>
          <Link to={`/companies/${handle}`} className="card-img-link">
          <img alt={name} src={logoUrl} />
        </Link>
        </CardBody>
      </Card>
    </section>
  );
};

export default CompanyCard;
