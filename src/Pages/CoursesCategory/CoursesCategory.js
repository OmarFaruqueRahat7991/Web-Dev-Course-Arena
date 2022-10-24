import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CoursesCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        <h3>All Courses</h3>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/category/${category.id}`}
            >
              {" "}
              {category.name}{" "}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CoursesCategory;
