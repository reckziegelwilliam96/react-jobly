import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
    return (
        <div className="NavBar">
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {/* When page first loads, only show signup or login */}
                        <NavLink exact to="/login">
                            Log In
                        </NavLink>
                        <NavLink exact to="/signup">
                            Sign Up
                        </NavLink>
                        {/* After login or signup, show navlinks below */}
                        <NavLink exact to="/companies">
                            Companies
                        </NavLink>
                        <NavLink exact to="/jobs">
                            Jobs
                        </NavLink>
                        <NavLink exact to="/profile">
                            Profile
                        </NavLink>
                        <NavLink exact to="/logout">
                            Log Out
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;