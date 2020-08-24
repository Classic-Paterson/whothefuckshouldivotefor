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
import { AutoSizer, List } from "react-virtualized";

const colStyles = {
  padding: "1rem 1rem 0rem 1rem",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(277px, 1fr))",
  gridGap: "30px 0px"
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
  let { SelectedPolicies, Policies } = useContext(PolicyProviderContext);

  const [modalPolicy, setModalPolicy] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (policy) => {
    setShow(true);
    setModalPolicy(policy);
  };

  if (!Policies) return null;

  const ITEMS_COUNT = Policies.length
  const ITEM_SIZE = 500

  return (
    <>
      <CardDeck style={colStyles}>
        <AutoSizer style={colStyles}>
          {({ height, width }) => {
            const itemsPerRow = 3;
            const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);

            return (
              <List
                className="List"
                width={width}
                height={height}
                rowCount={rowCount}
                rowHeight={ITEM_SIZE}
                rowRenderer={({ index, key, style }) => {
                  return (
                    <Card  key={Policies[index].PolicyId} style={{ height: "350px", width: "325px", display: "inline-flex"}}>
                    <a style={{ cursor: "pointer", flex: "1 1 auto" }} onClick={() => handleShow(Policies[index])}>
                      {/* <Card.Img variant="top" src={policy.PolicyImage} /> */}
                      <Card.Body>
                        <Card.Title>{Policies[index].PolicyTitle}</Card.Title>
                        <Card.Text>
                          <TextTruncate line={3} element="span" truncateText="…" text={Policies[index].PolicyText} />
                        </Card.Text>
                      </Card.Body>
                    </a>
                    <Card.Footer style={footerStyles}>
                      <CounterComponent
                        policyId={Policies[index].PolicyId}
                        partyId={Policies[index].PartyId}
                        decision={policyDecision(SelectedPolicies, Policies[index].PolicyId)}
                        results={false}
                      />
                    </Card.Footer>
                  </Card>
                  );
                }}
              />
            );
          }}
        </AutoSizer>
      </CardDeck>

      {modalPolicy ? (
        <Modal size="lg" show={show} onHide={handleClose}>
          <Card key={modalPolicy.PolicyId} style={{ height: "100%" }}>
            {/* <Card.Img variant="top" src={modalPolicy.PolicyImage} /> */}
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
