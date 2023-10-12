import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './The_Boardroom_Logo.png';
import Button from 'react-bootstrap/Button';

class TopMenu extends React.Component {
  render() {
    return (
        <Navbar expand="lg" bg="light" className="fixed-top pb-2">
          <Container>
            <Navbar.Brand href="#home"><i className="bi bi-instagram"></i></Navbar.Brand>
            <Nav className="mx-auto"><a href="#"><img src={logo} width="70px" alt=""/></a></Nav>
            <Nav><Button variant="dark" href="#">Menu</Button></Nav>
          </Container>
        </Navbar>
    );
  }
}

export default TopMenu;
