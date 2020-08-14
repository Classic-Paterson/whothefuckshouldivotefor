import React, { useContext } from "react";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CounterComponent from "./counterComponent";

import { PolicyProviderContext } from "./policyProvider";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px"
};

const cardStyles = {
  padding: "2rem 1rem 0rem 1rem"
};

const PoliciesComponent = () => {
  let {Policies} = useContext(PolicyProviderContext);
  return (
    <Row xs={1} sm={1} md={2} lg={3}>
      {Policies.map((policy) => {
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
               <CounterComponent policyId={policy.PolicyId} partyId={policy.PartyId} results={false} />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default PoliciesComponent;