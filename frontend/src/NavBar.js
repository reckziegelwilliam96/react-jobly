import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { UserContext } from "./UserContext";
import "./NavBar.css";

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Navbar className="navbar">
        <NavbarBrand tag={NavLink} to="/" activeClassName="active-link">
            Jobly
        </NavbarBrand>
            <Nav>
              {currentUser ? (
                <>
                  <NavItem><NavLink exact to="/companies" activeClassName="active-link">  Companies  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/jobs" activeClassName="active-link">  Jobs  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/profile" activeClassName="active-link">  Profile  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/" onClick={() => logout()} activeClassName="active-link">  Log Out {currentUser.firstName}</NavLink></NavItem>
                </>
              ) : (
                <>
                  <NavItem><NavLink exact to="/login" activeClassName="active-link">  Log In  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/signup" activeClassName="active-link">  Sign Up  </NavLink></NavItem>
                </>
              )}
            </Nav>
      </Navbar>
  );
};

export default NavBar;
