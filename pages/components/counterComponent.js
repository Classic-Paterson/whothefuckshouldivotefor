import React, { useContext, useState } from "react";

import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { FaThumbsUp, FaThumbsDown, FaHandPaper } from "react-icons/fa";

import { PolicyProviderContext } from "./policyProvider";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const toggleButtonStyles = {
  width: "100%",
  color: "black",
  fontSize: "25px",
};

const CounterComponent = (props) => {
  let { setSelectedPolicy } = useContext(PolicyProviderContext);
  const [radioValue, setRadioValue] = useState();
  return (
    <>
      <ButtonGroup toggle style={toggleButtonStyles} disabled={props.results}>
        <ToggleButton
          disabled={props.results}
          key="against"
          type="radio"
          variant="danger"
          name="radio"
          value="against"
          checked={radioValue === "against"}
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "against", props.partyId);
            setRadioValue(e.currentTarget.value);
          }}
        >
          <FaThumbsDown style={{ paddingBottom: "5px" }} />
          {props.votesAgainst}
        </ToggleButton>
        <ToggleButton
          disabled={props.results}
          key="undecided"
          type="radio"
          variant="warning"
          name="radio"
          value="undecided"
          checked={radioValue === "undecided"}
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "undecided", props.partyId);
            setRadioValue(e.currentTarget.value);
          }}
        >
          <FaHandPaper style={{ paddingBottom: "5px" }} />
          {props.votesUndecided}
        </ToggleButton>
        <ToggleButton
          disabled={props.results}
          key="for"
          type="radio"
          variant="success"
          name="radio"
          value="for"
          checked={radioValue === "for"}
          onChange={(e) => {
            setSelectedPolicy(props.policyId, "for", props.partyId);
            setRadioValue(e.currentTarget.value);
          }}
        >
          <FaThumbsUp style={{ paddingBottom: "5px" }} />
          {props.votesFor}
        </ToggleButton>
      </ButtonGroup>
    </>
  );
};

export default CounterComponent;
