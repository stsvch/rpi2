import React, {Component} from "react";
import { Button, Container, Card } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default class List extends Component{
    render(){
        return(
                <>  
                <Container>      
                    <Card>
                        <Card.Header>People1</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/p1">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>                  

                    <Card>
                        <Card.Header>People2</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/p2">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>                  

                    <Card>
                        <Card.Header>People3</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/p3">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>                  

                    <Card>
                        <Card.Header>People4</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/p4">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>                  

                    <Card>
                        <Card.Header>People5</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/p5">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card> 
                    </Container> 
    
            </>
        )
    }
}