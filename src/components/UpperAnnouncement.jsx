import React from "react";
import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
     0%   {background-color: #A675A1;}
    50%  {background-color: #8F3985;}
    100% {background-color: #A675A1;}
`;

const Container = styled.div`
  /* height: 80%; */
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  animation: ${colorChange} 4s infinite linear;
`;

const UpperAnnouncement = () => {
  return (
    <div>
      <Container>
        <div style={{ marginTop: "10px" }}>
          <p>NEW YEAR SALE!!! upto 50% OFF Hury...!</p>
        </div>
      </Container>
    </div>
  );
};

export default UpperAnnouncement;
