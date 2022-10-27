import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({ course }) => {
    const {
        name,
        image_url,
        instructor,
        instructor_img_url,
        details,
        price,
      } = course;
  return (
    <div className="bg-gray-100 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-100 mb-10">
	<div className="flex space-x-4">
		<img alt="" src={instructor_img_url} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
    <p style={{paddingTop:'10px'}}>{instructor}</p>
		</div>
	</div>
	<div>
		<img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{name}</h2>
		<p className="text-sm dark:text-gray-400">{details}</p>
    <h2>Price:{price}</h2>
	</div>
  <Button variant="outline-info"><Link to='/checkout' style={{textDecoration : "none"}}>Buy This Course</Link></Button> 

</div>
  );
};

export default Category;
