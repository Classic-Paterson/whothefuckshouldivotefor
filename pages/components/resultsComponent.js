import React, { useContext } from "react";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CounterComponent from "./counterComponent";

import { PolicyProviderContext } from "./policyProvider";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px",
};

const cardStyles = {
  padding: "2rem 1rem 0rem 1rem",
};

function countPartyVotes(SelectedPolicies, partyId, decision) {
  const selectedPartyPolicies = SelectedPolicies.filter(policy => policy.PartyId === partyId);
  let count = selectedPartyPolicies.reduce((count, policy) => {
      if (policy.Decision == decision) {
        console.log("policy", policy)
        
        return count += 1;
      }
    }, 0);
    console.log('count', count)
    return count;
}

const ResultsComponent = () => {
  let { SelectedPolicies, Parties } = useContext(PolicyProviderContext);

  return (
    <Row xs={1} sm={1} md={2} lg={3}>
      {Parties.map((party) => {
        const partyVotesFor = countPartyVotes(SelectedPolicies, party.PartyId, "for");
        const partyVotesAgainst = countPartyVotes(SelectedPolicies, party.PartyId, "against");
        const partyVotesUndecided = countPartyVotes(SelectedPolicies, party.PartyId, "undecided");

        return (
          <Col style={cardStyles}>
            <Card>
              <Card.Img variant="top" src={party.PartyImage} />
              <Card.Body>
                <Card.Title>
                  {party.PartyTitle}
                </Card.Title>
                {/* <Card.Text>Should you vote?{" "}
                  <b>{party.PartyVotes.Decision}.</b></Card.Text> */}
                <Card.Text>{party.PartyText}</Card.Text>
                <CounterComponent
                  results={true}
                  votesFor={partyVotesFor}
                  votesAgainst={partyVotesAgainst}
                  votesUndecided={partyVotesUndecided}
                />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ResultsComponent;
