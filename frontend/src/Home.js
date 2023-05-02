import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AuthContext, UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {

  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);



return (
    <div className="home-container">
        <Card>
          <CardBody>
            <CardTitle>Jobly</CardTitle>
          </CardBody>
          <CardText>All the jobs in one, convenient place.</CardText>
          {token && currentUser ? (
          <CardText>Welcome back, {currentUser.username}</CardText>
          ) : (
            <div className="button-container">
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
            </div>
          )}
        </Card>
    </div>
);


}

export default Home;