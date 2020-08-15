import React, { useContext, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaThumbsUp, FaThumbsDown, FaHandPaper } from "react-icons/fa";
import { PolicyProviderContext } from "./policyProvider";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "20px",
  opacity: "1",
};

const iconStyles = {
  paddingBottom: "5px",
  color: "black",
};

const CounterComponent = (props) => {
  let { setSelectedPolicy } = useContext(PolicyProviderContext);
  return (
    <>
      <ButtonGroup toggle style={toggleButtonStyles} disabled={props.results}>
        <ToggleButton
        style={toggleButtonStyles}
          disabled={props.results}
          key="against"
          type="radio"
          variant="danger"
          name="radio"
          value="against"
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "against", props.partyId);
          }}
        >
          <FaThumbsDown style={iconStyles} />
          {props.votesAgainst}
        </ToggleButton>
        <ToggleButton
        style={toggleButtonStyles}
          disabled={props.results}
          key="undecided"
          type="radio"
          variant="warning"
          name="radio"
          value="undecided"
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "undecided", props.partyId);
          }}
        >
          <FaHandPaper style={iconStyles} />
          {props.votesUndecided}
        </ToggleButton>
        <ToggleButton
        style={toggleButtonStyles}
          disabled={props.results}
          key="for"
          type="radio"
          variant="success"
          name="radio"
          value="for"
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "for", props.partyId);
          }}
        >
          <FaThumbsUp style={iconStyles} />
          {props.votesFor}
        </ToggleButton>
      </ButtonGroup>
    </>
  );
};

export default CounterComponent;
