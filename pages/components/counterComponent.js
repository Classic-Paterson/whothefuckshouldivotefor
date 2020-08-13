import React, { useState } from "react";

import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { FaThumbsUp, FaThumbsDown, FaHandPaper } from "react-icons/fa";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px",
};

const CounterComponent = (props) => {
    let [partyVotesFor, setPartyVotesForCount] = useState(0);
    let [partyVotesAgainst, setPartyVotesAgainstCount] = useState(0);
    let [partyVotesUndecided, setPartyVotesUndecidedCount] = useState(0);

  return (
    <ToggleButtonGroup style={toggleButtonStyles} type="checkbox">
      <ToggleButton style={toggleButtonStyles} variant="danger" onClick={() => setPartyVotesAgainstCount(partyVotesAgainst ++)}>
        <FaThumbsDown style={{ paddingBottom: "5px" }} />
        {props.results ? partyVotesAgainst : ''}
      </ToggleButton>
      <ToggleButton style={toggleButtonStyles} variant="warning" onClick={() => setPartyVotesUndecidedCount(partyVotesUndecided ++)}>
        <FaHandPaper style={{ paddingBottom: "5px" }} />
        {props.results ? partyVotesUndecided : ''}
      </ToggleButton>
      <ToggleButton style={toggleButtonStyles} variant="success" onClick={() => setPartyVotesForCount(partyVotesFor ++)}>
        <FaThumbsUp style={{ paddingBottom: "5px" }} />
        {props.results ? partyVotesFor : ''}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CounterComponent;
