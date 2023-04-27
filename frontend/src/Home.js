import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AuthContext, UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Home() {

  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
              Jobly
          </CardTitle>
        </CardBody>
        {token && currentUser ? (
          <CardText>
          All the jobs in one, convenient place.
        </CardText>
        ) : (
          <>
          <CardText>
            All the jobs in one, convenient place.
          </CardText>
          <Link to="/login">
            <Button color="primary">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button color="primary">
              Sign Up
            </Button>
          </Link>
          </>
        )}
      </Card>
    </section>
  );
}

export default Home;