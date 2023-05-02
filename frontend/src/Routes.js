import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";
import { AuthContext, UserContext } from "./UserContext";
import CompanyDetail from "./CompanyDetail";

const Routes = ({ signup, login, logout }) => {
    const { token, setToken } = useContext(AuthContext);
    const { currentUser, setCurrentUser } = useContext(UserContext);

    
    return (
        <BrowserRouter>
          <AuthContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ currentUser, setCurrentUser }}>
              <NavBar logout={logout} />
              <main>
                <Switch>
                  <Route path="/signup">
                    <SignUpForm signup={signup}/>
                  </Route>
                  <Route path="/login">
                    <LogInForm login={login}/>
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/companies/:handle">
                    <CompanyDetail />
                  </Route>
                  <Route exact path="/companies">
                    <Companies />
                  </Route>
                  <Route exact path="/jobs">
                    <Jobs />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </main>
            </UserContext.Provider>
          </AuthContext.Provider>
        </BrowserRouter>
    );
};

export default Routes;
