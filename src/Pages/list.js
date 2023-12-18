import React, {Component, useTransition} from "react";
import { Button, Container, Card, Form, ListGroup } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from "react"
import data from "../data.json";


export default function List (){

        const { t } = useTranslation();
        const temp = t('people', {returnObjects: true});
        
      //  temp.map(item) => {
      //      <div>
      //          {item}
      //      </div>
      //  }  
          //  console.log(arr);
        // search field
        const arr = Object.keys(data).map((id) => [id, t(`people.${id}.surname`) + " " + t(`people.${id}.name`) + " " + t(`people.${id}.patronymic`)])
        const [name, setName] = useState('');
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
                            <Form.Control className="search-box" type="search" placeholder={t("searchCaption")} onChange={find} />
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
                                    <p className="arch-fio">{arr[0][1]}</p>
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