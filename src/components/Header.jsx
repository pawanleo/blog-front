import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem('token');
        navigate('/login');
    }


    return (


        <div>
            <Navbar style={{'backgroundColor':'#fb1239'}} fixed="top"  variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#"> Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          
                        <Nav.Link href="#home">
                    <Link style={{'textDecoration':'none'}} class="text-light" to="/">Home</Link>
                  </Nav.Link>

                        <Nav.Link href="#home">
                    <Link style={{'textDecoration':'none'}} class="text-light" to="/dashboard">Dashboard</Link>
                  </Nav.Link> 
  
                        </Nav>
                        <div className="d-flex">
                            {
                              !localStorage.getItem('token') ?
                              <>
                            <Button variant="outline-light"> <Link style={{'textDecoration':'none'}} class="text-dark" to="/signup">Signup</Link> </Button>
                            <Button variant="light ms-4"><Link style={{'textDecoration':'none'}} class="text-dark" to="/login">Login</Link></Button>
                              </>  :

                            <Button onClick={logout} variant="light">Logout</Button>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
