import React from "react";
import {NavbarBrand, NavLink, Navbar, Nav, Button} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Test from "./test";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Navigation() {
  return (
    <Router>
    <div class="mb-5 pb-4">
      <Navbar
        fixed="top"
        style={{ background: "rgb(77,75,75,0.7)"}}
        variant="dark"
        expand="lg"
      >
        <NavbarBrand
          className="mr-4 col-3"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight:500,
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
            <NavLink className="mx-1" href="/about">
              <Button variant="outline-light" style={{ border: "0px" }}>
                About
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="/work">
              <Button variant="outline-light" style={{ border: "0px" }}>
                My work
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="/education">
              <Button variant="outline-light" style={{ border: "0px" }}>
                Education
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="/contact">
              <Button variant="outline-light" style={{ border: "0px" }}>
                Contact Me
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="/test">
              <Button variant="outline-light" style={{ border: "0px" }}>
Test
              </Button>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
          <div>
            <Switch>
              <Route path="/test">
              <Test />
              </Route>
            </Switch>
           </div>
          </div>
        </Router>

  );
}

