import Link from "next/link";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { useContext } from "react";

import { PolicyProviderContext } from "./policyProvider";

const headerStyles = {
  padding: "2rem 1rem",
  marginBottom: "0px",
};

const linkStyles = {
  color: "white",
  textDecoration: "none",
};

const buttonStyles = {
  //padding: "10px",
  margin: "0px 5px",
};

function PolicyCount(Policies) {
  let count = 0;
  Policies.map((PolicyCategory) => {
    count += PolicyCategory.Policies.length
  })
  return count;
}

const Header = () => {
  let { Policies, SelectedPolicies } = useContext(PolicyProviderContext);
  return (
    <Jumbotron style={headerStyles}>
      <div className="clearfix">
        <h1 className="header">Who the F#*k should I vote for.</h1>
        <h3 className="header">
          A website for deciding who the f#*k should{" "}
          <b>
            <u>or shouldn't</u>
          </b>{" "}
          get your vote.
        </h3>
        {Policies ? (
          <>
          There are currently {PolicyCount(Policies)} f#*king policies and you've decided about {SelectedPolicies.length} of them.
          </>
        ) : null       
      }
       <br />
         Policy statements are re-published from Policy. This site is not affiliated with Policy.
        <br />
        <Link href="/results">
          <Button style={buttonStyles} className="float-right">
            <a style={linkStyles}>Results</a>
          </Button>
        </Link>
        <Link href="/">
          <Button style={buttonStyles} className="float-right">
            <a style={linkStyles}>Policies</a>
          </Button>
        </Link>
      </div>
    </Jumbotron>
  );
};

export default Header;
