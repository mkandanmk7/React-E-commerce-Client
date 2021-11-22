import { SendOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin-top: 3rem;
`;
const InnerContainer = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a675a1;
  color: black;
  padding: 1.4rem;
`;
const Input = styled.input`
  height: 2rem;
  width: 18rem;
  padding: 5px;
  padding-left: 15px;
  font-size: 16px;
  color: #777;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  height: 2rem;
  display: flex;
  align-items: center;

  padding: 7px;
  border: none;
  background-color: white;
  color: #a675a1;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -30px;
  border-left: 1.5px solid #a675a1;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;

  &:focus {
    background-color: #000;
    color: #fff;
  }
`;

const Newsletter = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <div>
          <h1>Newsletter</h1>
        </div>
        <div>
          <p>
            Grab your discount and timely updates for your favourite product
          </p>
        </div>
        <div className="position-relative">
          <Input type="text" placeholder="your Email" />
          <Button>
            <SendOutlined />
          </Button>
        </div>
      </InnerContainer>
    </MainContainer>
  );
};

export default Newsletter;
