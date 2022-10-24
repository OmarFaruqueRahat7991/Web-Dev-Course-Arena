import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col lg='4'>
                <h2>Left Side Nav</h2>
                </Col>
                <Col lg='8'>
                <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;