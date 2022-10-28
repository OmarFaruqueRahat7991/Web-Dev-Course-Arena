import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser , updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate('/');
        handleUpdateUserProfile(name,photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };


  const handleUpdateUserProfile = (name,photoURL) => {
    const profile = {
        displayName: name, 
        photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {
      }).catch((error) => {
        console.error(error);
      });
  }

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        height: "500px",
        width: "500px",
        border: "3px solid",
        marginLeft: "500px",
        marginTop: "50px",
        marginBottom: "50px",
        padding: "20px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Text className="text-danger">{error}</Form.Text> <br />
      <Button variant="primary" type="submit">
        Register
      </Button>{" "}
      <br />
      <Button className="mt-4 mb-4" variant="outline-info">
        <Link style={{ textDecoration: "none" }} to="/login">
          Already Have An Account?Login Here!
        </Link>
      </Button>
    </Form>
  );
};

export default Register;
