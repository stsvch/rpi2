import React, { Component } from "react";
import { Container, TabContent, Tab, Nav, Row, Col, Button, CardGroup, Card, Alert } from "react-bootstrap";
import yana from './img/yana.jpg'
import anya from './img/anya.jpg'
import danik from './img/danik.jpg'
import artem from './img/artem.jpg'
import "./home.css";
import People from './people';

export default class Home extends Component {
    render() {
        return (
            <Container className="home_page">
                <Container className="website">
                    <Alert>
                        <Alert.Heading>About site</Alert.Heading>
                    <p>
                    Legendary bank robbers went down in history not because of their heroic deeds, 
                    but because of the most brazen attacks on banks. As you know, life writes the best scripts, 
                    so the stories of daring bank robbers 
                    are an inspiration for many screenwriters, directors and writers. 
                    Meet the legendary bank robbers — thieves of all time.
                    </p>
                    <hr />
                    <p className="mb-0">
                        On this site you can get acquainted with the most famous robbers
                    </p>
                    </Alert>
                </Container>
                <Container className="people">
                    <Card>
                        <Card.Header>People</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>                  
                </Container>
                <Container className="team-container">
                    <h1> Our team</h1>
                    <CardGroup className="team">
                        <Card className="dev">
                            <Card.Img variant="top" src={yana} />
                            <Card.Body>
                                <Card.Title>Yana</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://github.com/stsvch">GitHub</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="dev">
                            <Card.Img variant="top" src={anya} />
                            <Card.Body>
                                <Card.Title>Anya</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://github.com/Ann1508">GitHub</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="dev">
                            <Card.Img variant="top" src={artem} />
                            <Card.Body>
                                <Card.Title>Artem</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://github.com/ArturPirogkovMinsk">GitHub</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="dev">
                            <Card.Img variant="top" src={danik} />
                            <Card.Body>
                                <Card.Title>Danik</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://github.com/stsvch">GitHub</Card.Link>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>
            </Container>
        )
    }
}