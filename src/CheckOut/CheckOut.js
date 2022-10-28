import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
 

  return (
    <div style={{height:'200px' , width:'500px' , border: "3px solid", marginLeft: '500px',marginTop: '50px',marginBottom: '50px',}}>
      <h1>Proceed To Payment</h1>
      <Button variant="outline-info">
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          Choose Payment Options
        </Link>
      </Button>
    </div>
      );
};

export default Checkout;
