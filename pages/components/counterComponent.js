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
  } 

const iconStyles = {
  paddingBottom: "5px",
  color: "black",
};

const CounterComponent = (props) => {
  let { setSelectedPolicy } = useContext(PolicyProviderContext);

  const [radioValue, setRadioValue] = useState(null);

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
          checked={radioValue === "against"}
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "against", props.partyId);
            setRadioValue("against");
          }}
        >
          <FaThumbsDown style={iconStyles} />
          {props.votesAgainst}
        </ToggleButton>
        <ToggleButton
          style={toggleButtonStyles}
          disabled={props.results}
          checked={radioValue === "undecided"}
          key="undecided"
          type="radio"
          variant="warning"
          name="radio"
          value="undecided"
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "undecided", props.partyId);
            setRadioValue("undecided");
          }}
        >
          <FaHandPaper style={iconStyles} />
          {props.votesUndecided}
        </ToggleButton>
        <ToggleButton
          style={toggleButtonStyles}
          disabled={props.results}
          checked={radioValue === "for"}
          key="for"
          type="radio"
          variant="success"
          name="radio"
          value="for"
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "for", props.partyId);
            setRadioValue("for");
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
