import React, {Component} from "react";
import { Container, FormControl, Navbar, Nav } from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/home';
import List from '../Pages/list';
import PersonalInfo from "../Pages/PersonalInfo";

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
                        <Route exact path="/PersonalInfo/:id" element={<PersonalInfo/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}