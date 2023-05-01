import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { UserContext } from "./UserContext";

const NavBar = ({logout}) => {

    const { currentUser } = useContext(UserContext);

    return (
        <div className="NavBar">
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {currentUser ? (
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
                                <NavLink exact to="/" onClick={() => logout()}>
                                    Log Out, {currentUser.username}
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