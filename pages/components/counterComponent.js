import React, { useContext } from "react";

import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { FaThumbsUp, FaThumbsDown, FaHandPaper } from "react-icons/fa";

import { PolicyProviderContext } from "./policyProvider";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px",
};

const CounterComponent = (props) => {
  let { setSelectedPolicy } = useContext(PolicyProviderContext);
  console.log(props)
  return (
    <ToggleButtonGroup style={toggleButtonStyles} type="checkbox">
      <ToggleButton
        style={toggleButtonStyles}
        variant="danger"
        onClick={() => {
          setSelectedPolicy(props.policyId, "against", props.partyId);
        }}
      >
        <FaThumbsDown style={{ paddingBottom: "5px" }} />
        {props.votesAgainst}
      </ToggleButton>
      <ToggleButton
        style={toggleButtonStyles}
        variant="warning"
        onClick={() => {
          setSelectedPolicy(props.policyId, "undecided", props.partyId);
        }}
      >
        <FaHandPaper style={{ paddingBottom: "5px" }} />
        {props.votesUndecided}
      </ToggleButton>
      <ToggleButton
        style={toggleButtonStyles}
        variant="success"
        onClick={() => {
          setSelectedPolicy(props.policyId, "for", props.partyId);
        }}
      >
        <FaThumbsUp style={{ paddingBottom: "5px" }} />
        {props.votesFor}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CounterComponent;
