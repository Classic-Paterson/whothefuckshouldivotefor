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


const PoliciesComponent = () => {
  let { Policies } = useContext(PolicyProviderContext);
  return (
    <CardDeck style={colStyles} xs={1} sm={1} md={2} lg={3}>
      {Policies.map((policy) => {
        return (
          <Card key={policy.PolicyId}>
            <Card.Img variant="top" src={policy.PolicyImage} />
            <Card.Body>
              <Card.Title>{policy.PolicyTitle}</Card.Title>
              <Card.Text>
                <TextTruncate line={3} element="span" truncateText="…" text={policy.PolicyText} />
              </Card.Text>
            </Card.Body>
            <Card.Footer style={footerStyles}>
              <CounterComponent policyId={policy.PolicyId} partyId={policy.PartyId} results={false} />
            </Card.Footer>
          </Card>
        );
      })}
    </CardDeck>
  );
};

export default PoliciesComponent;
