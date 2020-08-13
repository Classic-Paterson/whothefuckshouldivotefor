import React, { useState } from "react";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CounterComponent from "./counterComponent";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px"
};

const cardStyles = {
  padding: "2rem 1rem 0rem 1rem"
};

const policies = [
  {
    PolicyTitle:
      "Allow all people in prison to vote",
    PolicyText:
      'This party says we need to uphold human rights by expanding opportunities for people to participate meaningfully in our democracy at all levels. This party says people in prison are already carrying out their punishment by being in prison, and denying them access to voting only alienates people from the political system. It says allowing people in ...',
    PolicyImage: 
      '/images/topic-law-justice-and-government.jpg',
    PolicyProvider:
      'Green_Party'
  },
  {
    PolicyTitle:
      "Increase funding for social and support services for people who have caused and experienced harm",
    PolicyText:
      'This party says we have one of the highest rates of imprisonment in the world, fuelling a cycle of crime and despair which disproportionately harms Māori and people of colour, mental health sufferers, and low-income communities.our justice system needs transformative change ...',
    PolicyImage:
     '/images/topic-law-justice-and-government.jpg',
    PolicyProvider:
      'Green_Party'
  },
  {
    PolicyTitle:
      "Require that all prisoners are in work, education, or training",
    PolicyText:
      'This party says it is committed to a high functioning Corrections system that keeps New Zealanders safe and works to reduce repeat offenders. This party says prisoners should be required to be in work, education or training. This party would require all prisoners to be in work, education, or training. This party would also support the Howard League\'s driving and literacy training.',
    PolicyImage:
      '/images/topic-law-justice-and-government.jpg',
    PolicyProvider:
      'National_Party'
  },
  {
    PolicyTitle:
      "Continue provide active learning programme for schools and ECEs",
    PolicyText:
      'This party says it wants NZ to be the best place in the world for children and young people. This party wants to inspire young people to be active and healthy. This party would continue to roll out the Healthy Active Learning programme. The policy is a continuation of the existing Healthy Active Learning programme. The programme involves ...',
    PolicyImage: 
      '/images/topic-media-culture-and-recreation.jpg'  ,
    PolicyProvider:
      'Labour_Party'
  },
  {
    PolicyTitle:
      "Stop the Tahr cull and establish a new management plan",
    PolicyText:
      'This party says the department of conservation\'s consultation about the proposed 2020-21 Tahr cull was inadequate. It says Tahr hunting provides jobs as well as recreational and tourism opportunities. This party says the cull should be stopped so consultation can occur, and a management system should be established to protect native flora and fauna while allowing for continued ...',
    PolicyImage: 
      '/images/topic-media-culture-and-recreation.jpg'  ,
    PolicyProvider:
      'New_Conservative_Party'
  },
  {
    PolicyTitle:
      "Consult hunters about policies for control of game animals",
    PolicyText:
      'This party says that for many New Zealanders, recreational fishing and hunting are a way of life which should be protected. This party also says that fishing and hunting communities have an important role to play in the conservation effort, as partners with government alongside local communities and NGOs. The expertise of the hunting community should be used in the control of game animals.',
    PolicyImage: 
      '/images/topic-media-culture-and-recreation.jpg',
    PolicyProvider:
      'National_Party'
  }
];

const PoliciesComponent = () => {
  return (
    <Row xs={1} sm={1} md={2} lg={3}>
      {policies.map((policy) => {
        return (
          <Col style={cardStyles}>
            <Card>
              <Card.Img
                variant="top"
                src={policy.PolicyImage}
              />
              <Card.Body>
                <Card.Title>{policy.PolicyTitle}</Card.Title>
                <Card.Text>{policy.PolicyText}</Card.Text>
               <CounterComponent policyProvider={policy.PolicyProvider} results={false} />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default PoliciesComponent;
