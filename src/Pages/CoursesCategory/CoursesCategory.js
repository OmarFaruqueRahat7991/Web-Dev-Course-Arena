import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CoursesCategory = () => {
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://my-tenth-assignment-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        <h3>Categories</h3>
        {categories.map((category) => (
          <p key={category.id}>
            <Button variant="outline-info"
             
            >
              {" "}
              <Link style={{textDecoration : "none"}} to={`/category/${category.id}`}>{category.name}</Link>{" "}
            </Button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CoursesCategory;


/* <Button variant="outline-info">Info</Button> */