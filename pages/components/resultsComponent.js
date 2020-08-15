import React, { useContext } from "react";

import Card from "react-bootstrap/Card";

import TextTruncate from "react-text-truncate";

import CardDeck from "react-bootstrap/CardDeck";
import CounterComponent from "./counterComponent";

import { PolicyProviderContext } from "./policyProvider";

const colStyles = {
  padding: "2rem 1rem 0rem 1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gridGap: "30px 0px",
};

const footerStyles = {
  background: "none",
  borderTop: "none"
}

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
    <CardDeck style={colStyles} xs={1} sm={1} md={2} lg={3}>
      {Parties.map((party) => {
        const partyVotesFor = countPartyVotes(SelectedPolicies, party.PartyId, "for");
        const partyVotesAgainst = countPartyVotes(SelectedPolicies, party.PartyId, "against");
        const partyVotesUndecided = countPartyVotes(SelectedPolicies, party.PartyId, "undecided");

        if (partyVotesFor > 0 || partyVotesAgainst > 0 || partyVotesUndecided > 0) {
          return (
            <Card>
              <Card.Img variant="top" src={party.PartyImage} />
              <Card.Body>
                <Card.Title>{party.PartyTitle}</Card.Title>
                <Card.Text>
                  <TextTruncate line={10} element="span" truncateText=" …" text={party.PartyText} />
                </Card.Text>
              </Card.Body>
              <Card.Footer style={footerStyles}>
                <CounterComponent
                  results={true}
                  votesFor={partyVotesFor}
                  votesAgainst={partyVotesAgainst}
                  votesUndecided={partyVotesUndecided}
                />
              </Card.Footer>
            </Card>
          );
        }
      })}
    </CardDeck>
  );
};

export default ResultsComponent;
