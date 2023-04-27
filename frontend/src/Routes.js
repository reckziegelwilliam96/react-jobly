import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";
import JoblyApi from "./api";
import { AuthContext, UserContext } from "./UserContext";

const Routes = ({ signup, login, logout }) => {
  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCompaniesAndJobs() {
      let companiesPromise = JoblyApi.getCompanies();
      let jobsPromise = JoblyApi.getJobs();

      const [companies, jobs] = await Promise.all([companiesPromise, jobsPromise]);

      setCompanies(companies);
      setJobs(jobs);
      setIsLoading(false);
    }
    getCompaniesAndJobs();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ token }}>
          <UserContext.Provider value={{ currentUser }}>
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
                <Route exact path="/companies">
                  <Companies companies={companies} />
                </Route>
                <Route exact path="/jobs">
                  <Jobs jobs={jobs} />
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
    </div>
  );
};

export default Routes;
