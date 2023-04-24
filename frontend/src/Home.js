import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
              Jobly
          </CardTitle>
          <CardText>
            All the jobs in one, convenient place.
          </CardText>
        </CardBody>
        <Button color="primary" exact to="/login">.
            Log In
        </Button>
        <Button color="primary" exact to="/signup">
            Sign Up
        </Button>
      </Card>
    </section>
  );
}

export default Home;