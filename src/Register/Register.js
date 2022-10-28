import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle , FaGithub } from 'react-icons/fa';


const Register = () => {
    return (
        <Form style={{height:'800px' , width:'500px' , border: "3px solid", marginLeft: '500px',marginTop: '50px',marginBottom: '50px',padding:'20px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Your Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree to All Terms and Conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button className='mt-4 mb-4' variant="outline-info">
      <FaGoogle style={{marginLeft:'60px'}}></FaGoogle>Sign Up With Google
      </Button><br />
      <Button className='mb-4' variant="outline-dark">
      <FaGithub style={{marginLeft:'60px'}}></FaGithub>Sign Up With Github
      </Button>
      </Form>
    );
};

export default Register;