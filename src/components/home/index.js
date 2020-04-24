import React from 'react';
import { Container, Navbar, Row, Image, Col } from 'react-bootstrap'; 

const Home = ({ name = "Gagan" }) => (
    <Container fluid>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Welcome {name}</Navbar.Brand>
        </Navbar>
        <Row>
            <Col xs={6} md={4}>
                <Image src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" rounded />
            </Col>
        </Row>
    </Container>
);

export default Home;