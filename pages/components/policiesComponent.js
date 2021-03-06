// @ts-check

import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import TextTruncate from "react-text-truncate";
import CardDeck from "react-bootstrap/CardDeck";
import CounterComponent from "./counterComponent";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { PolicyProviderContext } from "./policyProvider";
import LazyLoad from "react-lazyload";
import ScrollToTop from "react-scroll-to-top";

const colStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "30px 0px",
};

const footerStyles = {
  background: "none",
  borderTop: "none",
};

const accordianStyles = {
  marginTop: "10px",
};

function policyDecision(SelectedPolicies, policyId) {
  let decision = "";
  SelectedPolicies.map(function (selectedPolicy) {
    if (selectedPolicy.PolicyId === policyId) {
      decision = selectedPolicy.Decision;
    }
  });
  return decision;
}

const PoliciesComponent = () => {
  let { SelectedPolicies, Policies, policiesMocked, showAllPolicies} = useContext(PolicyProviderContext);

  const [modalPolicy, setModalPolicy] = useState(null);

  const showWholeCardFilter = (policyId) => {
    if (!showAllPolicies) {
      let selectedPolicieIds = SelectedPolicies.map(function (selectedPolicy) {
        return selectedPolicy.PolicyId;
      });

      return !selectedPolicieIds.includes(policyId);
    }
    else return true;
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (policy) => {
    setShow(true);
    setModalPolicy(policy);
  };

  if (!policiesMocked) return null;

  return (
    <>
     <ScrollToTop smooth />
      <Card.Body>
        <CardDeck style={colStyles}>
          {policiesMocked
            .filter((policy) => showWholeCardFilter(policy.PolicyId))
            .map((policy) => {
              return (
                <>
                  <LazyLoad key={policy.PolicyId} height={100} offset={[-100, 100]}>
                    <Card key={policy.PolicyId} style={{ height: "100%" }}>
                      <a style={{ cursor: "pointer", flex: "1 1 auto" }} onClick={() => handleShow(policy)}>
                        {/* <Card.Img variant="top" src={policy.PolicyImage} /> */}
                        <Card.Body>
                          <Card.Title>{policy.PolicyTitle}</Card.Title>
                          <Card.Text>
                            <TextTruncate line={3} element="span" truncateText="…" text={policy.PolicyText} />
                          </Card.Text>
                        </Card.Body>
                      </a>
                      <Card.Footer style={footerStyles}>
                        <CounterComponent
                          policyId={policy.PolicyId}
                          partyId={policy.PartyId}
                          decision={policyDecision(SelectedPolicies, policy.PolicyId)}
                          results={false}
                        />
                      </Card.Footer>
                    </Card>
                  </LazyLoad>
                </>
              );
            })}
        </CardDeck>
      </Card.Body>

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
