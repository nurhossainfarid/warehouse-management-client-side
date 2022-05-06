import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../img/laptop-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
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
                {
                                user ? 
                                    <>
                                        <Nav.Link as={Link} to={'/manageInventory/:inventoryID'}>Manage Inventory</Nav.Link>
                                        <Nav.Link as={Link} to={'/addNewItem'}>Add New</Nav.Link>
                                        <Nav.Link as={Link} to={'/myItems'}>My Items</Nav.Link>
                                        <button onClick={logout}>Sign out</button>
                                    </>
                                :
                                    <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>                
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;