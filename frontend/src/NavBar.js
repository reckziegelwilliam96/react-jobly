import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { AuthContext } from "./UserContext";

const NavBar = () => {

    const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
    
    return (
        <div className="NavBar">
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {isSignedIn ? (
                            <>
                                <NavLink exact to="/companies">
                                    Companies
                                </NavLink>
                                <NavLink exact to="/jobs">
                                    Jobs
                                </NavLink>
                                <NavLink exact to="/profile">
                                    Profile
                                </NavLink>
                                <NavLink exact to="/" onClick={() => setIsSignedIn(false)}>
                                    Log Out
                                </NavLink>

                            </>
                        ) : (
                            <>
                                <NavLink exact to="/login">
                                    Log In
                                </NavLink>
                                <NavLink exact to="/signup">
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;