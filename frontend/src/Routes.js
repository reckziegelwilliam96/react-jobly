import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
// import Profile from "./Profile";
// import SignUp from "./SignUp";
// import LogIn from "./LogIn"
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";
import { AuthContext } from "./UserContext";


const Routes = ({companies, jobs}) => {
    const [ isSignedIn, setIsSignedIn ] = useContext(false);

    return (
        <div className="App">
        <BrowserRouter>
            <AuthContext.provider value={{ isSignedIn, setIsSignedIn }}>
                <NavBar />
                <main>
                    <Switch>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/login">
                            <LogIn />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
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
            </AuthContext.provider>
        </BrowserRouter>
        </div>
    )

}

export default Routes;