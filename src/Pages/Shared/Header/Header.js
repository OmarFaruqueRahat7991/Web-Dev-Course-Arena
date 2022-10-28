import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../Asssets/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import CoursesCategory from "../../CoursesCategory/CoursesCategory";
import Button from "react-bootstrap/Button";
import { FaGithub, FaGoogle, FaUserAlt } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Image } from "react-bootstrap";

const Header = () => {

  const {user, providerLogIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      })
      .catch(error => console.error(error));
    
  }

  const handleGithubSignIn = () => {
    providerLogIn(githubProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      })
      .catch(error => console.error(error));
    
  }
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
          <Link to="/" style={{ textDecoration: "none" }}>
            Web Dev Course Arena
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: "none", marginTop: "3px" }}
              className="ms-2 me-2"
              to="/courses"
            >
              Courses
            </Link>
            <Link
              className="me-2"
              style={{ textDecoration: "none", marginTop: "3px" }}
              to="/faq"
            >
              FAQ
            </Link>
            <Link
              style={{ textDecoration: "none", marginTop: "3px" }}
              to="/blogs"
            >
              Blogs
            </Link>
          </Nav>
          <Nav>
            <Link
              style={{ textDecoration: "none", marginRight: "10px",marginTop:'35px' }}
              to="/login"
            >
              Login
            </Link>
            <Link
              style={{ textDecoration: "none",marginTop:'35px',marginRight:'10px' }}
              to="/Register"
              href="#memes"
            >
              Register
            </Link>
            <p style={{ marginTop:'35px',marginRight:'10px' }} className="text-white">{user?.displayName}</p>
            <Link>{user?.photoURL ? <Image  style={{height:'30px',marginTop:'35px'}} roundedCircle src={user?.photoURL}></Image> : <FaUserAlt style={{marginTop:'39px'}} ></FaUserAlt> }</Link>
            <Button onClick={handleGoogleSignIn} style={{fontSize:'15px',width: '100px', height: '100px',marginRight:'10px' }} className="" variant="outline-info">
              <FaGoogle style={{marginLeft:'30px'}}></FaGoogle>Sign In With Google
            </Button>
            <br />
            <Button onClick={handleGithubSignIn} style={{fontSize:'15px',width: '100px', height: '100px',marginRight:'-100px' }} className="mb-4" variant="outline-info">
              <FaGithub style={{marginLeft:'30px'}}></FaGithub>Sign In With Github
            </Button>
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
