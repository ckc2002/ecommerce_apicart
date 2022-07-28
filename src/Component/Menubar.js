import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menubar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
                    <Nav className="me-auto d-flex justify-content-between">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link to="/cart">Add Cart</Nav.Link>
                    </Nav>
                    <Link to="/cart" style={{ textDecoration: 'none', color: "white" }}>Add Cart</Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Menubar