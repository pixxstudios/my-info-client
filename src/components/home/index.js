import React from 'react';
import { Container, Navbar } from 'react-bootstrap'; 

const Home = () => (
    <Container fluid>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Welcome</Navbar.Brand>
        </Navbar>
    </Container>
);

export default Home;