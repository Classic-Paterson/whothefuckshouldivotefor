import React, { useContext } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";
import CounterComponent from "./counterComponent";

import { PolicyProviderContext } from "./policyProvider";

const colStyles = {
  padding: "2rem 1rem 0rem 1rem",
};

function countPartyVotes(SelectedPolicies, partyId, decision) {
  const selectedPartyPolicies = SelectedPolicies.filter((policy) => policy.PartyId === partyId);
  let count = selectedPartyPolicies.reduce((count, policy) => {
    if (policy.Decision == decision) {
      return (count += 1);
    } else return count;
  }, 0);
  return count;
}

const ResultsComponent = () => {
  let { SelectedPolicies, Parties } = useContext(PolicyProviderContext);

  return (
<CardColumns style={colStyles} xs={1} sm={1} md={2} lg={3}>
      {Parties.map((party) => {
        const partyVotesFor = countPartyVotes(SelectedPolicies, party.PartyId, "for");
        const partyVotesAgainst = countPartyVotes(SelectedPolicies, party.PartyId, "against");
        const partyVotesUndecided = countPartyVotes(SelectedPolicies, party.PartyId, "undecided");

        return (
            <Card>
              <Card.Img variant="top" src={party.PartyImage} />
              <Card.Body>
                <Card.Title>{party.PartyTitle}</Card.Title>
                <Card.Text>{party.PartyText}</Card.Text>
                <CounterComponent
                  results={true}
                  votesFor={partyVotesFor}
                  votesAgainst={partyVotesAgainst}
                  votesUndecided={partyVotesUndecided}
                />
              </Card.Body>
            </Card>
        );
      })}
    </CardColumns>
  );
};

export default ResultsComponent;
