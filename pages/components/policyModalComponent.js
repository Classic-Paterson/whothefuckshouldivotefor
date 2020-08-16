import React, { useContext, useState } from "react";

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true)

const policyModalComponent = (props) => {

        return (
            <Modal show={show} onHide={handleClose}>
            <Card key={props.modalPolicy.PolicyId} style={{ height: "100%" }}>
              <Card.Img variant="top" src={props.modalPolicy.PolicyImage} />
              <Card.Body>
                <Card.Title>{props.modalPolicy.PolicyTitle}</Card.Title>
                <Card.Text>{props.modalPolicy.PolicyText}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Card.Footer>
            </Card>
          </Modal>
        );
};

export default policyModalComponent;
