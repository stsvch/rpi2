import React, { useState } from "react";
import { Button, Container, Card, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function List() {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const people = t('people', { returnObjects: true });

  const filteredPeople = people.filter(
    (person) => person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredPeople);

  return (
    <>
      <Container>
        <div>
          <Form>
            <Form.Control className="search-box" type="search" placeholder={t("searchCaption")} onChange={handleSearch} />
          </Form>
        </div>
        <Card>
          <ListGroup variant="flush">
            {filteredPeople.map((person) => (
              <ListGroup.Item key={person.id} action as={Link} to={`/PersonalInfo/${person.id}`}>
                <div>
                  <img
                    src={require(`../img/${person.id}/fface.png`)} // Fix image source path
                    alt={`Avatar of ${person.name}`}
                  />
                  <div>
                    <p className="arch-fio">{`${person.name} ${person.surname}`}</p>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Container>
    </>
  );
}
