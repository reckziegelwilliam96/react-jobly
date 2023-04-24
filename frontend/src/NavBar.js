import React from "react";
import { NavLink } from "react-router-dom";
import { NavBar, Nav, NavItem } from "react-strap";

const NavBar = () => {
    return (
        <div>
            <NavBar expand="md">
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
                        <Navlink exact to="/logout">
                            Log Out
                        </Navlink>
                    </NavItem>
                </Nav>
            </NavBar>
        </div>
    )
}