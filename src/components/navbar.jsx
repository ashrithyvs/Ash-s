import React from "react";
import { NavbarBrand, NavLink, Navbar, Nav, Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Router>
      <Navbar
        fixed="top"
        style={{ background: "rgb(5,5,5,0.7)", fontFamily: "Exo, sans-serif" }}
        variant="dark"
        expand="lg"
      >
        <NavbarBrand
          className="mr-4 col-3"
          style={{
            fontWeight: 600,
            fontSize: "37px",
            letterSpacing: "5px",
          }}
          href="#home"
        >
          #h-ash
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="col-md-8 justify-content-center">
            <NavLink className="mx-1" href="#about">
              <Button variant="outline-light" style={{ border: "0px" }}>
                About
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#skills">
              <Button variant="outline-light" style={{ border: "0px" }}>
                Skills
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#work">
              <Button variant="outline-light" style={{ border: "0px" }}>
                My work
              </Button>
            </NavLink>

            <NavLink className="mx-1" href="#contact">
              <Button variant="outline-light" style={{ border: "0px" }}>
                Contact Me
              </Button>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
      <div>
        <Switch>
          <Route path="/test"></Route>
        </Switch>
      </div>
    </Router>
  );
}
