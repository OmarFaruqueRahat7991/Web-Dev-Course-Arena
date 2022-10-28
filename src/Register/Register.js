import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setError("");
        form.reset();
        // handleUpdateUserProfile(name,photoURL);
        // handleEmailVerification();
        // toast.success('Please Verify Your Email Address.');
      })
      .catch((error) => {
        console.error(error);
        // setError(error.message);
      });
  

  }

    return (
        <Form onSubmit={handleSubmit} style={{height:'500px' , width:'500px' , border: "3px solid", marginLeft: '500px',marginTop: '50px',marginBottom: '50px',padding:'20px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password'  type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree to All Terms and Conditions" />
        </Form.Group>
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> <br />
        <Button variant="primary" type="submit">
          Register
        </Button> <br />
        <Button className='mt-4 mb-4' variant="outline-info">
      <Link style={{textDecoration:'none'}} to='/login'>Already Have An Account?Login Here!</Link>
      </Button>
      </Form>
    );
};

export default Register;