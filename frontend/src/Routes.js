import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import SignUp from "./SignUp";
import LogIn from "./LogIn"
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";


const Routes = ({companies, jobs, company, job}) => {
    return (
        <div className="App">
        <BrowserRouter>
            <NavBar />
            <main>
                <Switch>
                    <Route path to="/signup">
                        <SignUp />
                    </Route>
                    <Route path to="/login">
                        <LogIn />
                    </Route>
                    <Route path to="/profile">
                        <Profile />
                    </Route>
                    <Route path to="/companies/:handle">
                        <Company company={company} />
                    </Route>
                    <Route exact path to="/companies">
                        <Companies companies={companies}/>
                    </Route>
                    <Route exact path to="jobs/:id">
                        <Job job={job}/>
                    </Route>
                    <Route exact path to="/jobs">
                        <Jobs jobs={jobs}/>
                    </Route>
                    <Route exact path to="/">
                        <Home />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </BrowserRouter>
        </div>
    )

}

export default Routes;