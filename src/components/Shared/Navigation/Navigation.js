import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import moduleName from "../../../images/logos/logo.png";
import "./Navigation.css";
const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={moduleName} width="120" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-menu">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              {user.email ? (
                <Button variant="dark" onClick={logOut}>
                  Log out
                </Button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
