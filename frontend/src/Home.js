import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AuthContext, UserContext } from "./UserContext";

function Home() {

  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const 
  const [user, setUser] = useState('');

  const postUser = (user) => {

  };

  function handleSignIn() {
    setUser(user);
    setIsSignedIn(true);
  }

  function handleSignOut() {
    setIsSignedIn(false);
  }

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
        {isSignedIn ? (
          <Button color="primary" onClick={handleSignOut}>
            Log Out
          </Button>
        ) : (
          <>
          <Button color="primary" exact to="/login">.
              Log In
          </Button>
          <Button color="primary" exact to="/signup">
              Sign Up
          </Button>
          </>
        )}
      </Card>
    </section>
  );
}

export default Home;