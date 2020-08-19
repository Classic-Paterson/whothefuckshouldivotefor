// @ts-check

import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import TextTruncate from "react-text-truncate";
import CardDeck from "react-bootstrap/CardDeck";
import CounterComponent from "./counterComponent";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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

function policyDecision(SelectedPolicies, policyId) {
  let decision = ''
  SelectedPolicies.map(function (selectedPolicy) {
    if (selectedPolicy.PolicyId === policyId) {
      decision = selectedPolicy.Decision;
    }
  });
  return decision;
}

const PoliciesComponent = () => {
  let { SelectedPolicies, Policies } = useContext(PolicyProviderContext);

  const [modalPolicy, setModalPolicy] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (policy) => {
    setShow(true);
    setModalPolicy(policy);
  };
  
  return (
    <>
      <CardDeck style={colStyles}>
        {Policies.map((policy) => {
          return (
            <>
              <Card key={policy.PolicyId} style={{ height: "100%" }}>
                <a style={{ cursor: "pointer", flex: "1 1 auto" }} onClick={() => handleShow(policy)}>
                  <Card.Img variant="top" src={policy.PolicyImage} />
                  <Card.Body>
                    <Card.Title>{policy.PolicyTitle}</Card.Title>
                    <Card.Text>
                      <TextTruncate line={3} element="span" truncateText="…" text={policy.PolicyText} />
                    </Card.Text>
                  </Card.Body>
                </a>
                <Card.Footer style={footerStyles}>
                  <CounterComponent policyId={policy.PolicyId} partyId={policy.PartyId} decision={policyDecision(SelectedPolicies, policy.PolicyId)} results={false} />
                </Card.Footer>
              </Card>
            </>
          );
        })}
      </CardDeck>

      {modalPolicy ? (
        <Modal size="lg" show={show} onHide={handleClose}>
          <Card key={modalPolicy.PolicyId} style={{ height: "100%" }}>
            <Card.Img variant="top" src={modalPolicy.PolicyImage} />
            <Card.Body>
              <Card.Title>{modalPolicy.PolicyTitle}</Card.Title>
              {/* <Card.Text>{modalPolicy.PolicyText}</Card.Text> */}
              {/* <b>Policy Sources:</b>
              {modalPolicy.PolicySources.map((PolicySource) => {
                return (
                  <Card.Text>
                    <a target="_blank" href={PolicySource.Link}>{PolicySource.Title}</a>
                  </Card.Text>
                );
              })} */}
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
};

export default PoliciesComponent;
