import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink/CustomLink';
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
        <div className='position'>
            <Navbar collapseOnSelect expand="lg" className='bg-white'>
            <Container>
                    <Navbar.Brand className='flex justify-center items-center' as={Link} to={'/home'}>
                        <img src={logo} width={50} height={50} alt="" />
                        <span className='text-cyan-500 font-bold'>Lapotopo House Center</span>
                    </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto md:gap-2">
                <Nav.Link as={CustomLink} to={'/home'}>Home</Nav.Link>
                <Nav.Link as={CustomLink} to={'/block'}>Block</Nav.Link>
                <Nav.Link as={CustomLink} to={'/gallery'}>Gallery</Nav.Link>
                
                {
                                user ? 
                                    <>
                                        <Nav.Link as={CustomLink} to={'/manageInventory/:inventoryID'}>Manage Inventory</Nav.Link>
                                        <Nav.Link as={CustomLink} to={'/addNewItem'}>Add New</Nav.Link>
                                        <Nav.Link as={CustomLink} to={'/myItems'}>My Items</Nav.Link>
                                        <button className='font-semibold' style={{ color: '#9345ad'}} onClick={logout}>Sign out</button>
                                    </>
                                :
                                    <Nav.Link as={CustomLink} to={'/login'}>Login</Nav.Link>                
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;