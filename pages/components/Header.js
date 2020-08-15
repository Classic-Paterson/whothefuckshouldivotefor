import Link from "next/link";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

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
    margin: "0px 5px"
};

const Header = () => (
  <Jumbotron style={headerStyles}>
    <div className="clearfix">
      <h1 className="header">Who the fuck should I vote for.</h1>
      <h3 className="header">
        A website for deciding who the fuck should <b><u>or shouldn't</u></b> get your vote.
      </h3>
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

export default Header;
