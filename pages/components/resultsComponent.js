// @ts-check

import React, { useContext, useState } from "react";

import Card from "react-bootstrap/Card";

import TextTruncate from "react-text-truncate";

import CardDeck from "react-bootstrap/CardDeck";
import CounterComponent from "./counterComponent";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { PolicyProviderContext } from "./policyProvider";

const colStyles = {
  padding: "2rem 1rem 0rem 1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(277px, 1fr))",
  gridGap: "30px 0px",
};

const footerStyles = {
  background: "none",
  borderTop: "none",
};

const alertStyles = {
  margin: "10px",
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

function listPartyPolicies(SelectedPolicies, Policies, partyId, decision) {
  let selectedPolicieIds = SelectedPolicies.map(function (selectedPolicy) {
    if (selectedPolicy.PartyId === partyId && selectedPolicy.Decision === decision) {
      return selectedPolicy.PolicyId;
    }
  });

  let policiesToReturn = [];

  Policies.forEach((policy) => {
    if (selectedPolicieIds.includes(policy.PolicyId)) {
      policiesToReturn.push(policy);
    }
  });

  return policiesToReturn;
}

const ResultsComponent = () => {
  let { SelectedPolicies, Parties, policiesMocked, removeData } = useContext(PolicyProviderContext);
  const [modalParty, setModalParty] = useState(null);
  const [partyPoliciesFor, setPartyPoliciesFor] = useState(null);
  const [partyPoliciesAgainst, setPartyPoliciesAgainst] = useState(null);
  const [partyPoliciesUndecided, setPartyPoliciesUndecided] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (party) => {
    setModalParty(party);
    setPartyPoliciesFor(listPartyPolicies(SelectedPolicies, policiesMocked, party.PartyId, "for"));
    setPartyPoliciesAgainst(listPartyPolicies(SelectedPolicies, policiesMocked, party.PartyId, "against"));
    setPartyPoliciesUndecided(listPartyPolicies(SelectedPolicies, policiesMocked, party.PartyId, "undecided"));
    setShow(true);
  };
  if (!policiesMocked) return null;
  if (!SelectedPolicies.length) {
    return (
      <CardDeck style={colStyles}>
        <Card>
          <Card.Body>
            <Card.Title>Pick some policies you clown</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  } else {
    return (
      <>
        <CardDeck style={colStyles}>
          {Parties.map((party) => {
            const partyVotesFor = countPartyVotes(SelectedPolicies, party.PartyId, "for");
            const partyVotesAgainst = countPartyVotes(SelectedPolicies, party.PartyId, "against");
            const partyVotesUndecided = countPartyVotes(SelectedPolicies, party.PartyId, "undecided");

            if (partyVotesFor > 0 || partyVotesAgainst > 0 || partyVotesUndecided > 0) {
              return (
                <Card key={party.PartyId}>
                  <a style={{ cursor: "pointer", flex: "1 1 auto" }} onClick={() => handleShow(party)}>
                    <Card.Img variant="top" src={party.PartyImage} />
                    <Card.Body>
                      <Card.Title>{party.PartyTitle}</Card.Title>
                      <Card.Text>
                        <TextTruncate line={6} element="span" truncateText=" …" text={party.PartyText} />
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
                  </a>
                </Card>
              );
            }
          })}
          {SelectedPolicies.length > 0 ? (
            <Card>
              <a style={{ cursor: "pointer", flex: "1 1 auto" }}>
                {/* <Card.Img variant="top" src={party.PartyImage} /> */}
                <Card.Body>
                  <Card.Title>Manage Policies</Card.Title>
                  <Card.Text>
                    <Button onClick={() => removeData()}>Clear all selections</Button>
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={footerStyles}></Card.Footer>
              </a>
            </Card>
          ) : null}
        </CardDeck>

        {modalParty ? (
          <Modal size="lg" show={show} onHide={handleClose}>
            <Card key={modalParty.PolicyId} style={{ height: "100%" }}>
              <Card.Img variant="top" src={modalParty.PartyImage} />
              <Card.Body>
                <Card.Title>{modalParty.PartyTitle}</Card.Title>
                <Card.Text>{modalParty.PartyText}</Card.Text>

                {partyPoliciesFor.length > 0 ? <b>Policies you agree with:</b> : null}
                {partyPoliciesFor.map((policy) => {
                  return (
                    <>
                      <Alert style={alertStyles} key={policy.PolicyId} variant={"success"}>
                        {policy.PolicyTitle}
                      </Alert>
                    </>
                  );
                })}

                {partyPoliciesUndecided.length > 0 ? <b>Policies you are undecided about:</b> : null}
                {partyPoliciesUndecided.map((policy) => {
                  return (
                    <>
                      <Alert style={alertStyles} key={policy.PolicyId} variant={"warning"}>
                        {policy.PolicyTitle}
                      </Alert>
                    </>
                  );
                })}

                {partyPoliciesAgainst.length > 0 ? <b>Policies you disagree with:</b> : null}
                {partyPoliciesAgainst.map((policy) => {
                  return (
                    <>
                      <Alert style={alertStyles} key={policy.PolicyId} variant={"danger"}>
                        {policy.PolicyTitle}
                      </Alert>
                    </>
                  );
                })}
              </Card.Body>
              <Card.Footer>
                <Button className="float-right" variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Card.Footer>
            </Card>
          </Modal>
        ) : null}
      </>
    );
  }
};

export default ResultsComponent;
