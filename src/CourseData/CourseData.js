import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import CoursesCategory from '../Pages/CoursesCategory/CoursesCategory';

const CourseData = () => {
    const course = useLoaderData();
    return (
        <Container>
        <Row>
          <Col lg="4" className='d-none d-lg-block'>
            <CoursesCategory></CoursesCategory>
          </Col>
          <Col lg="8">
          {
                course.map(c => <CourseSummaryCard
                key={c._id}
                c={c}
                ></CourseSummaryCard>)
            }
          </Col>
        </Row>
      </Container>
    );
};

export default CourseData;