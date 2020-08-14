import React, { useContext } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";
import CounterComponent from "./counterComponent";

import { PolicyProviderContext } from "./policyProvider";

const colStyles = {
  padding: "2rem 1rem 0rem 1rem",
};

const PoliciesComponent = () => {
  let { Policies } = useContext(PolicyProviderContext);
  return (
    <CardColumns style={colStyles} xs={1} sm={1} md={2} lg={3}>
      {Policies.map((policy) => {
        return (
            <Card >
              <Card.Img variant="top" src={policy.PolicyImage} />
              <Card.Body>
                <Card.Title>{policy.PolicyTitle}</Card.Title>
                <Card.Text>{policy.PolicyText}</Card.Text>
                <CounterComponent policyId={policy.PolicyId} partyId={policy.PartyId} results={false} />
              </Card.Body>
            </Card>
        );
      })}
    </CardColumns>
  );
};

export default PoliciesComponent;
