import React, {Component} from "react";
import { Container, FormControl, Navbar, Nav } from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/home';
import List from '../Pages/list';
import P1 from '../Pages/pages/p1'
import P2 from '../Pages/pages/p2'
import P3 from '../Pages/pages/p3'
import P4 from '../Pages/pages/p4'
import P5 from '../Pages/pages/p5'

export default class Header extends Component{
    render(){
        return(
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/list">List</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/list" element={<List/>} />
                        <Route exact path="/p1" element={<P1/>} />
                        <Route exact path="/p2" element={<P2/>} />
                        <Route exact path="/p3" element={<P3/>} />
                        <Route exact path="/p4" element={<P4/>} />
                        <Route exact path="/p5" element={<P5/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}