import React from "react";
import styled from "styled-components";
import AdminNav from "../AdminComponents/AdminNav";
import TransactionNum from "../AdminComponents/TransactionNum";
import UserNum from "../AdminComponents/UserNum";

//styled comp
const MainContainer = styled.div``;
const Container = styled.div``;
const MapContainer = styled.div``;
const BottomCards = styled.div``;
const UserCard = styled.div``;
const TransactionCard = styled.div``;

const AdminHome = () => {
  return (
    <MainContainer>
      <AdminNav />
      <Container>
        <MapContainer>
          <div>
            <h4>User Analytics</h4>
          </div>
          {/* <div> <Line data={data} options={options}/></div> */}
        </MapContainer>
        <BottomCards>
          <UserCard>
            <UserNum />
          </UserCard>
          <TransactionCard>
            <TransactionNum />
          </TransactionCard>
        </BottomCards>
      </Container>
    </MainContainer>
  );
};

export default AdminHome;
