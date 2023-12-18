import React, {Component} from "react";
import { Button, Container, Card, Form, ListGroup } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useState } from "react"
import data from "../data.json";


export default function List (){
        const arr = Object.keys(data).map((id) => [id, (`people.${id}.surname`) + " " + (`people.${id}.name`) + " " + (`people.${id}.patronymic`)])
        
        // search field
        const [name, setName] = useState('');
        // search result
        const [foundPerson, setFoundPerson] = useState(arr);
        const find = (e) => {
            const keyword = e.target.value;
            if (keyword !== "") {
                const results = arr.filter((user) => {
                    return user[1].toLowerCase().includes(keyword.toLowerCase());
                });
                setFoundPerson(results);
            } else {
                setFoundPerson(arr);
                // If the text field is empty, show all users
            }
        
            setName(keyword);
        };
        return(
                <>  
                <Container>    
                    <div >
                    <Form >
                            <Form.Control className="search-box" type="search" placeholder={("searchCaption")} onChange={find} />
                    </Form>
                    </div>  
                    <Card >
                    <ListGroup variant="flush" >

                        {foundPerson && foundPerson.length > 0 ? (
                        foundPerson.map((id) =>
                            <ListGroup.Item action as={Link} to={`/PersonalInfo/${id[0]}`}>
                                <div >
                                    <img
					                    src={require(`../img/${id[0]}/fface.png`)}
				                    />
                                    <div>
                                        <p >{(`people.${id[0]}.surname`)} {(`people.${id[0]}.name`)} {(`people.${id[0]}.patronymic`)}</p>
                                        <p >{(`people.${id[0]}.shortDescription`)}</p>
                                    </div>
                                </div>

                            </ListGroup.Item>

                        )) : ("")}

                    </ListGroup>
                </Card>
                </Container> 
    
            </>
        )

    }