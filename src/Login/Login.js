import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle , FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <Form style={{height:'500px' , width:'500px' , border: "3px solid", marginLeft: '500px',marginTop: '50px',marginBottom: '50px',padding:'20px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button><br />
      <Button className='mt-4 mb-4' variant="outline-info">
      <FaGoogle style={{marginLeft:'60px'}}></FaGoogle>Sign In With Google
      </Button><br />
      <Button className='mb-4' variant="outline-dark">
      <FaGithub style={{marginLeft:'60px'}}></FaGithub>Sign In With Github
      </Button>
    </Form>
    );
};

export default Login;