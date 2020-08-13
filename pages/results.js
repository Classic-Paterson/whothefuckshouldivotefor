import React, { useState } from "react";
import Link from "next/link";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import { FaRegLaughBeam, FaRegAngry, FaRegMeh } from "react-icons/fa";

const Results = () => (
  <Container className="p-3">
    <Jumbotron style={{ paddingBottom: '2em', marginBottom: 0 }}>
      <h1 className="header">Who the fuck should I vote for</h1>
      <h3 className="header">
        A website for deciding who the fuck should <b>or shouldn't</b> get your
        vote
      </h3>
      <br />
      <Button size="lg">
        <Link href="/">
          <a style={{ color: "white", textDecoration: "none" }}>Back</a>
        </Link>
      </Button>
      <Button size="lg" className="float-right">
        Reset
      </Button>
    </Jumbotron>
    <Row>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img variant="top" src="/images/parties-Labour-Party.jpg" />
          <Card.Body>
            <Card.Title>
              <h1>Labour Party</h1>
            </Card.Title>
            <Card.Text>
              The New Zealand Labour Party (Rōpū Reipa o Aotearoa) currently leads the government. It is a centre-left political party, which describes its founding principle as democratic socialism. Labour formed in 1916 out of various socialist parties and trade unions and is the country's oldest political party still in existence. Labour has been in government six times and had ten leaders become prime ministers.
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} /> x 30
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} /> x 10
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} /> x 20
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img variant="top" src="/images/parties-National-Party.jpg" />
          <Card.Body>
            <Card.Title>
              <h1>National Party</h1>
            </Card.Title>
            <Card.Text>
            The New Zealand National Party (Rōpū Nāhinara) is currently the main opposition party in parliament. A centre-right party, National tends to be economically liberal and socially conservative, promoting individual freedom, personal responsibility and competitive enterprise. National formed in 1936 as a combination of the Reform and United parties to oppose the growing labour movement. It has been in government five times and had eight leaders become prime minister.
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} /> x 20
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} /> x 10
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} /> x 30
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img variant="top" src="/images/parties-Advance-New-Zealand.jpg" />
          <Card.Body>
            <Card.Title>
              <h1>Advance New Zealand</h1>
            </Card.Title>
            <Card.Text>
            The Advance New Zealand Party was recently established by Jami-Lee Ross, former National MP and currently an independent MP for Botany. Ross describes the party as an attempt to represent middle-ground voters. It is particularly focussed on electoral reform and anti-corruption policies. Advance recently joined with the unregistered New Zealand Public Party, whose founder, Billy Te Kahika, has previously claimed that the Covid-19 pandemic was planned by the United Nations, and opposes 5G, 1080, fluoridation of water, and vaccination.
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} /> x 10
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} /> x 30
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} /> x 10
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Results;
