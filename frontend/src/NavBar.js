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
        <NavbarBrand tag={NavLink} to="/">
            Jobly
        </NavbarBrand>
            <Nav>
              {currentUser ? (
                <>
                  <NavItem><NavLink exact to="/companies">  Companies  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/jobs">  Jobs  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/profile">  Profile  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/" onClick={() => logout()}>  Log Out, {currentUser.username}</NavLink></NavItem>
                </>
              ) : (
                <>
                  <NavItem><NavLink exact to="/login">  Log In  </NavLink></NavItem>
                  <NavItem><NavLink exact to="/signup">  Sign Up  </NavLink></NavItem>
                </>
              )}
            </Nav>
      </Navbar>
  );
};

export default NavBar;
