import Header from "./Header";
import Container from "react-bootstrap/Container";

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
    <Container className="p-3">
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
  </Container>
);

export default Layout;