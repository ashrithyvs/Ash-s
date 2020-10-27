import React from "react";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavLink from "react-bootstrap/NavLink";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
function Navigation() {
  return (
    <div class="mb-5 pb-4">
      <Navbar
        fixed="top"
        style={{ background: "#9d65c9" }}
        variant="dark"
        expand="lg"
      >
        <NavbarBrand
          className="mr-4 col-3"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 300,
            fontSize: "37px",
            letterSpacing: "5px",
          }}
          href="#home"
        >
          Ash's
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="col-md-9 justify-content-center">
            <NavLink className="mx-1" href="#home">
              <Button variant="outline-light" style={{ border: "0px" }}>
                Home
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#link">
              <Button variant="outline-light" style={{ border: "0px" }}>
                About
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#link">
              <Button variant="outline-light" style={{ border: "0px" }}>
                Education
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#link">
              <Button variant="outline-light" style={{ border: "0px" }}>
                My work
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#link">
              <Button variant="outline-light" style={{ border: "0px" }}>
                Contact Me
              </Button>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
