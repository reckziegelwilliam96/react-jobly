import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
// import Profile from "./Profile";
// import SignUp from "./SignUp";
// import LogIn from "./LogIn"
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";


const Routes = ({companies, jobs}) => {
    return (
        <div className="App">
        <BrowserRouter>
            <NavBar />
            <main>
                <Switch>
                    {/* <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route> */}
                    <Route exact path="/companies">
                        <Companies companies={companies}/>
                    </Route>
                    <Route exact path="/jobs">
                        <Jobs jobs={jobs}/>
                    </Route>
                    <Route exact path="/">
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