import React, { useState } from "react";

import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { FaThumbsUp, FaThumbsDown, FaHandPaper } from "react-icons/fa";
import store from "./store";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px",
};

const CounterComponent = (props) => {
  let policyProvider = {
    name: props.policyProvider,
    partyVotesFor: 0,
    partyVotesAgainst: 0,
    partyVotesUndecided: 0,
  };

  store.setState(policyProvider);

   const policyProviderState = store.state
//    .find(
//     (policyProvider) => policyProvider.name === props.policyProvider
//   );
console.log(policyProviderState)
  return (      
    <ToggleButtonGroup style={toggleButtonStyles} type="checkbox">
      <ToggleButton
        style={toggleButtonStyles}
        variant="danger"
        onClick={() =>
          policyProviderState.partyVotesAgainst++
        }
      >
        <FaThumbsDown style={{ paddingBottom: "5px" }} />
        {props.results ? policyProviderState.partyVotesAgainst : ""}
      </ToggleButton>
      <ToggleButton
        style={toggleButtonStyles}
        variant="warning"
        onClick={() =>
          policyProviderState.partyVotesUndecided++
        }
      >
        <FaHandPaper style={{ paddingBottom: "5px" }} />
        {props.results ? policyProviderState.partyVotesUndecided : ""}
      </ToggleButton>
      <ToggleButton
        style={toggleButtonStyles}
        variant="success"
        onClick={() => {
            policyProviderState.partyVotesFor++
            store.setState(policyProvider);
        }
        }
      >
        <FaThumbsUp style={{ paddingBottom: "5px" }} />
        {props.results ? policyProviderState.partyVotesFor : ""}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CounterComponent;
