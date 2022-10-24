import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";
import CoursesCategory from "../CoursesCategory/CoursesCategory";

const Courses = () => {
  return (
    <div>
      <h1>This Is Courses</h1>
      <Container>
        <Row>
          <Col lg="4" className='d-none d-lg-block'>
            <CoursesCategory></CoursesCategory>
          </Col>
          <Col lg="8">
            <CourseCard></CourseCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
