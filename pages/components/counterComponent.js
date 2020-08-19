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

const toggleButtonStylesFor = {
  width: "100%",
  color: "black",
  fontSize: "20px",
  color: "#155724",
  opacity: "1",
  backgroundColor: "#2ebe66",
  borderColor: "#2ebe66",
};

const toggleButtonStylesAgainst = {
  width: "100%",
  color: "black",
  fontSize: "20px",
  color: "#721c24",
  opacity: "1",
  backgroundColor: "#fe9798",
  borderColor: "#fe9798",
};

const toggleButtonStylesUndecided = {
  width: "100%",
  color: "black",
  fontSize: "20px",
  color: "#856404",
  opacity: "1",
  backgroundColor: "#f9c859",
  borderColor: "#f9c859",
};

const iconStyles = {
  paddingBottom: "5px",
  color: "black",
};

const CounterComponent = (props) => {
  let { setSelectedPolicy} = useContext(PolicyProviderContext);

  const [radioValue, setRadioValue] = useState(props.decision);

  return (
    <>
      <ButtonGroup toggle style={toggleButtonStyles} disabled={props.results}>
        <ToggleButton
          style={toggleButtonStylesAgainst}
          disabled={props.results}
          key="against"
          type="radio"
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
          style={toggleButtonStylesUndecided}
          disabled={props.results}
          checked={radioValue === "undecided"}
          key="undecided"
          type="radio"
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
          style={toggleButtonStylesFor}
          disabled={props.results}
          checked={radioValue === "for"}
          key="for"
          type="radio"
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
