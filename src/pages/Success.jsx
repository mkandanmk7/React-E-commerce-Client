import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

//syled comp
const SuccessDiv = styled.div`
  background-image: url("https://source.unsplash.com/VJ4pn_PSBLo");
  width: 100vw;
  height: 100vh;
`;

const Success = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const location = useLocation();
  const history = useNavigate();
  console.log(location);

  //demo
  const orderId = true;

  return (
    <SuccessDiv>
      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header>
          <Modal.Title>Your Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {orderId
            ? `Order has been created successfully. Your order number is ${orderId}`
            : `Successfull. Your order is being prepared...`}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => history("/")}
            style={{ padding: 10, marginTop: 20 }}
          >
            Home
          </Button>
          <Button
            className="bg-success"
            onClick={() => history("/order")}
            style={{ padding: 10, marginTop: 20 }}
          >
            Orders
          </Button>
        </Modal.Footer>
      </Modal>
    </SuccessDiv>
  );
};

export default Success;
