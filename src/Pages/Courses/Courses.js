import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Category from "../../Category/Category";
import CoursesCategory from "../CoursesCategory/CoursesCategory";

const Courses = () => {
  const courses = useLoaderData();
  
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4" className='d-none d-lg-block'>
            <CoursesCategory></CoursesCategory>
          </Col>
          <Col lg="8">
            <h1 style={{marginRight:'200px'}}>All Courses</h1>
           {
             
              courses?.map(course => <Category
                   key={course.id}
                   course={course}
                   ></Category>)
            
           }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
