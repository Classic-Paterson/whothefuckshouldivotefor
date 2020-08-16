import React, { useContext, useState } from "react";

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true)

const policyModalComponent = (props) => {

    if (props.policy != null){
        return (
          <Modal show={show} onHide={handleClose}>
          <Card key={props.ModalPolicy.PolicyId}>
              <Card.Img variant="top" src={props.ModalPolicy.PolicyImage} />
              <Card.Body>
              <Card.Title>{props.ModalPolicy.PolicyTitle}</Card.Title>
              <Card.Text>{props.ModalPolicy.PolicyText}</Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  Close
              </Button>
              </Card.Footer>
          </Card>
          </Modal>
        );
    }
};

export default policyModalComponent;
