/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest } from "../axiosMethod";

//styled comp
const Container = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 10px;
  background-color: white;
`;

const TransactionNum = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await publicRequest.get(`/order`, {
          headers: {
            token: user.currentUser.token,
          },
        });
        console.log("admin transaction ", res.data);
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  return (
    <Container>
      <h4>Latest Transactions</h4>
      <table className="table">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr>
                <td width="1rem">{order.userId}</td>
                <td>{order.amount}$</td>
                <td>{new Date(order.createdAt).toDateString()}</td>
                <td>{order.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionNum;
