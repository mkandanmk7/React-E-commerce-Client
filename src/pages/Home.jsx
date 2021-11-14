import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import UpperAnnouncement from "../components/UpperAnnouncement";

const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const Home = () => {
  return (
    <div>
      <MainContainer />
      <UpperAnnouncement />
      <Navbar />
    </div>
  );
};

export default Home;
