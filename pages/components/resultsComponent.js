import React, { useState } from "react";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CounterComponent from "./counterComponent";


const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px",
};

const cardStyles = {
  padding: "2rem 1rem 0rem 1rem"
};

const parties = [
  {
    PartyTitle: "Labour Party",
    PartyText:
      "The New Zealand Labour Party (Rōpū Reipa o Aotearoa) currently leads the government. It is a centre-left political party, which describes its founding principle as democratic socialism. Labour formed in 1916 out of various socialist parties and trade unions and is the country's oldest political party still in existence. Labour has been in government six times and had ten leaders become prime ministers.",
    PartyImage: "/images/parties-Labour-Party.jpg",
    PartyVotes: {
      For: 30,
      Against: 2,
      Undecided: 28,
      Decision: "Maybe",
    },
  },
  {
    PartyTitle: "National Party",
    PartyText:
      "The New Zealand National Party (Rōpū Nāhinara) is currently the main opposition party in parliament. A centre-right party, National tends to be economically liberal and socially conservative, promoting individual freedom, personal responsibility and competitive enterprise. National formed in 1936 as a combination of the Reform and United parties to oppose the growing labour movement. It has ...",
    PartyImage: "/images/parties-National-Party.jpg",
    PartyVotes: {
      For: 44,
      Against: 1,
      Undecided: 5,
      Decision: "Yes",
    },
  },
  {
    PartyTitle: "Advance New Zealand Party",
    PartyText:
      "The Advance New Zealand Party was recently established by Jami-Lee Ross, former National MP and currently an independent MP for Botany. Ross describes the party as an attempt to represent middle-ground voters. It is particularly focussed on electoral reform and anti-corruption policies. Advance recently joined with the unregistered New Zealand Public Party, whose founder, Billy Te Kahika, has ...",
    PartyImage: "/images/parties-Advance-New-Zealand.jpg",
    PartyVotes: {
      For: 2,
      Against: 48,
      Undecided: 0,
      Decision: "No",
    },
  }
];

const ResultsComponent = () => {
  return (
    <Row xs={1} sm={1} md={2} lg={3}>
      {parties.map((element) => {
        return (
          <Col style={cardStyles}>
            <Card>
              <Card.Img variant="top" src={element.PartyImage} />
              <Card.Body>
                <Card.Title>
                  {element.PartyTitle}
                </Card.Title>
                <Card.Text>Should you vote?{" "}
                  <b>{element.PartyVotes.Decision}.</b></Card.Text>
                <Card.Text>{element.PartyText}</Card.Text>
                <CounterComponent results = {true} />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ResultsComponent;
