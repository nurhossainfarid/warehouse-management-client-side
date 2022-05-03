import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../img/laptop-logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-cyan-400'>
            <Container>
                    <Navbar.Brand className='flex justify-center items-center' as={Link} to={'/home'}>
                        <img src={logo} width={50} alt="" />
                        <span>Lapotopo House Center</span>
                    </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;