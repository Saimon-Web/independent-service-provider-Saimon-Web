import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle className='color' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            user ? <Nav.Link as={Link} to="login" onClick={handleSignout}  >signout</Nav.Link> :

                                <div className='d-lg-flex'>
                                    <Nav.Link as={Link} to="login">Log in</Nav.Link>
                                    <Nav.Link as={Link} to="register">Register</Nav.Link>
                                </div>





                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;



