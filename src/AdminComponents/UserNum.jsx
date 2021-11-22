/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest } from "../axiosMethod";

//styled comp
const TableContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 10px;
  background-color: white;
`;

const UserNum = () => {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get(`/users/?new=true`, {
          headers: {
            token: user.currentUser.token,
          },
        });
        console.log(res);
        setUsers(res.data);
      } catch (error) {}
    };
    getUsers();
  }, []);
  return (
    <TableContainer>
      <h4>Newly Added Users</h4>
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default UserNum;
