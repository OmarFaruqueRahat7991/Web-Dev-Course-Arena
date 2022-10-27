import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../Asssets/logo.png";
import CoursesCategory from "../../CoursesCategory/CoursesCategory";

const Header = () => {
  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Link to='/'  style={{ textDecoration: "none" }}>Web Dev Course Arena</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: "none", marginTop: '3px' }}
              className="ms-2 me-2"
              to="/courses"
            >
              Courses
            </Link>
            <Link className="me-2" style={{ textDecoration: "none",marginTop: '3px' }} to="/faq">
              FAQ
            </Link>
            <Link style={{ textDecoration: "none",marginTop: '3px' }} to="/blogs">
              Blogs
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <CoursesCategory></CoursesCategory>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
