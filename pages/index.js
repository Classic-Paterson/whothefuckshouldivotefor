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

const Home = () => (
  <Container className="p-3">
    <Jumbotron style={{ marginBottom: 0 }}>
      <h1 className="header">Who the fuck should I vote for</h1>
      <h3 className="header">
        A website for deciding who the fuck should <b>or shouldn't</b> get your
        vote
      </h3>
      <br />
      <Button size="lg" className="float-right">
        <Link href="/results">
          <a style={{ color: "white", textDecoration: "none" }}>Results</a>
        </Link>
      </Button>
    </Jumbotron>
    <Row>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img
            variant="top"
            src="/images/topic-law-justice-and-government.jpg"
          />
          <Card.Body>
            <Card.Title>
              Consider taxi-style elevated transport system instead of light
              rail for Auckland
            </Card.Title>
            <Card.Text>
              This party says 'SkyCabs', which uses small, taxi-style cars
              elevated above the ground would be a better option. This option
              has been designed in NZ and would be entirely NZ-made. An...
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img
            variant="top"
            src="/images/topic-media-culture-and-recreation.jpg"
          />
          <Card.Body>
            <Card.Title>
              Remove tolls from roads in Tauranga and the Bay of Plenty
            </Card.Title>
            <Card.Text>
              This party says removing these tolls would increase traffic flow
              especially to and from Tauriko/Pyes Pa to the Tauranga CBD. It
              would also remove congestion from Cameron Road, especially in
              Greerton.
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img
            variant="top"
            src="/images/topic-transport-and-infrastructure.jpg"
          />
          <Card.Body>
            <Card.Title>
              Abolish regional fuel tax and reverse recent increases in fuel tax
            </Card.Title>
            <Card.Text>
              This party says we need to reform the tax system so that more
              families are self-sufficient. It says the average working family
              should be freed from paying excessive tax on their earnings.
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img
            variant="top"
            src="/images/topic-law-justice-and-government.jpg"
          />
          <Card.Body>
            <Card.Title>
              Increase the refugee quota to 5,000 over time
            </Card.Title>
            <Card.Text>
              This party says we should welcome people who want to make NZ their
              home. The global refugee crisis continues displace millions of
              people and we should help more refugees find a home here.
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img
            variant="top"
            src="/images/topic-media-culture-and-recreation.jpg"
          />
          <Card.Body>
            <Card.Title>
              Promote gender inclusion in job and apprenticeship programmes
            </Card.Title>
            <Card.Text>
              This party says job creation and apprenticeship programmes to have
              policies promoting inclusion to reduce gendered job segregation.{" "}
              <br />
              <br />
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ paddingTop: "2rem" }}>
        <Card>
          <Card.Img
            variant="top"
            src="/images/topic-transport-and-infrastructure.jpg"
          />
          <Card.Body>
            <Card.Title>
              Repeal two regulations for every new one made
            </Card.Title>
            <Card.Text>
              This party says in too many areas regulations have gone too far.
              It is the consumer that pays for most of it, either directly or
              through the lack of competition as expensive regulation favours
              large incumbents in any...
            </Card.Text>
            <ToggleButtonGroup
              style={{ width: "100%", color: "black" }}
              type="checkbox"
            >
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="danger"
              >
                <FaRegAngry style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="warning"
              >
                <FaRegMeh style={{ paddingBottom: "5px" }} />
              </ToggleButton>
              <ToggleButton
                style={{ color: "black", fontSize: "30px" }}
                variant="success"
              >
                <FaRegLaughBeam style={{ paddingBottom: "5px" }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
