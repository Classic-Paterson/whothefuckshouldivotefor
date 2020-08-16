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

const PoliciesComponent = () => {
  let { Policies } = useContext(PolicyProviderContext);

  const [modalPolicyId, setModalPolicyId] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (policy) => {
        setShow(true);
        setModalPolicyId(policy.PolicyId)
  }

  return (
    <>
      <CardDeck style={colStyles} xs={1} sm={1} md={2} lg={3}>
        {Policies.map((policy) => {
          return (
            <>
              <Card key={policy.PolicyId} style={{ height: "100%" }}>
                <a style={{ cursor: "pointer", flex: "1 1 auto" }} onClick={handleShow(policy)} >
                  <Card.Img variant="top" src={policy.PolicyImage} />
                  <Card.Body>
                    <Card.Title>{policy.PolicyTitle}</Card.Title>
                    <Card.Text>
                      <TextTruncate line={3} element="span" truncateText="…" text={policy.PolicyText} />
                    </Card.Text>
                  </Card.Body>
                </a>
                <Card.Footer style={footerStyles}>
                  <CounterComponent policyId={policy.PolicyId} partyId={policy.PartyId} results={false} />
                </Card.Footer>
              </Card>
            </>
          );
        })}
      </CardDeck>

      <Modal show={show} onHide={handleClose}>
        <Card key={modalPolicyId} style={{ height: "100%" }}>
          {/* <Card.Img variant="top" src={policy.PolicyImage} /> */}
          <Card.Body>
            <Card.Title>{modalPolicyId}</Card.Title>
            <Card.Text>{modalPolicyId}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Card.Footer>
        </Card>
      </Modal>
    </>
  );
};

export default PoliciesComponent;
