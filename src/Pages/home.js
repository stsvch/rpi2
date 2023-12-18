import React, { Component } from "react";
import { Container, TabContent, Tab, Nav, Row, Col, Button, CardGroup, Card, Alert } from "react-bootstrap";
import yana from '../img/yana.jpg'
import anya from '../img/anya.jpg'
import danik from '../img/danik.jpg'
import artem from '../img/artem.jpg'
import "./home.css";
import { useTranslation } from 'react-i18next';
import {
    NavLink,
} from "react-router-dom";

function getRandomInt(max) {
	return Math.floor((Math.random() * max))+1;
}


export default function Home(){
        const { t } = useTranslation();
        const person = t('people', { returnObjects: true });
        let id =  getRandomInt(4);
        return (
            <Container className="home_page">
                <Container className="website">
                    <Alert>
                        <Alert.Heading>{t("about1")}</Alert.Heading>
                        <p>{t("about2")}</p>
                        <hr />
                        <p className="mb-0">{t("about3")}</p>
                    </Alert>
                </Container>
                <Container className="people">
                    <Card>
                    <h3> {t("person_of_day")}</h3>
                        <Card.Img 
                            className="people-img"
                            variant="top"                             
                            src={require(`../img/${person[id].id}/fface.png`)} 
                            alt={`Avatar of ${person[id].name}`}
                            />
                        <Card.Title>{`${person[id].name} ${person[id].surname}`}</Card.Title>
                        <NavLink to={`/PersonalInfo/${person[id].id}`}>
                            <Button className="peopleb">{t("personButton")}</Button>
                        </NavLink>
                    </Card>                  
                </Container>
                <Container className="team-container">
                    <h1> {t("developers")}</h1>
                    <CardGroup className="team">
                        <Card className="dev">
                            <Card.Img variant="top" src={yana} />
                            <Card.Body>
                                <Card.Title>{t("dev1")}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://github.com/stsvch">GitHub</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="dev">
                            <Card.Img variant="top" src={anya} />
                            <Card.Body>
                                <Card.Title>{t("dev2")}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://github.com/Ann1508">GitHub</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="dev">
                            <Card.Img variant="top" src={artem} />
                            <Card.Body>
                                <Card.Title>{t("dev3")}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://github.com/ArturPirogkovMinsk">GitHub</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="dev">
                            <Card.Img variant="top" src={danik} />
                            <Card.Body>
                                <Card.Title>{t("dev4")}</Card.Title>
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