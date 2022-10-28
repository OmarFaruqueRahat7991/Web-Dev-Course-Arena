import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState("");
  const { logInUser } = useContext(AuthContext);


  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    

    logInUser(email,password)
    .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setError('');
        // if(user.emailVerified){
        //     navigate(from, { replace: true })
        // }
        // else{
        //     toast.error('Your Email Is Not Verified.Please Verify Your Email.');
        // }
      })
      .catch((error) => { 
        console.error(error);
        setError( error.message);
      })
      .finally(() =>{
        setLoading(false);
      })
}




    return (
        <Form onSubmit={handleSubmit} style={{height:'400px' , width:'500px' , border: "3px solid", marginLeft: '500px',marginTop: '50px',marginBottom: '50px',padding:'20px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
      </Form.Group>
      <Form.Text className="text-danger">
          {error}
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