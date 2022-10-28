import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form style={{height:'400px' , width:'500px' , border: "3px solid", marginLeft: '500px',marginTop: '50px',marginBottom: '50px',padding:'20px'}}>
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
      <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> <br />
      <Button variant="primary" type="submit">
        Login
      </Button><br />
      <Button className='mt-4 mb-4' variant="outline-info">
      <Link style={{textDecoration:'none'}} to='/register'>Don't Have An Account?Register Here!</Link>
      </Button>
    </Form>
    );
};

export default Login;