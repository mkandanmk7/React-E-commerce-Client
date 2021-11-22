import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import UpperAnnouncement from "../components/UpperAnnouncement";
import { large, medium } from "../responsive";

//styled comp
const MainContainer = styled.div`
  background-color: whitesmoke;
`;
const TopButtons = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem 8rem;
  ${medium({ margin: "2rem 1rem" })}
`;
const Button = styled.div`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background-color: #464141;
  color: white;
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;
  margin: 1rem;
  transition: 0.3s ease;
  font-weight: 700;

  &:hover {
    background-color: #000;
    color: #fff;

    box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  }
`;
const Container = styled.div`
  margin: 2rem 8rem;
  display: flex;
  gap: 2rem;
  ${large({ margin: "2rem 1rem", gap: "0" })}
  ${medium({ flexDirection: "column" })}
`;

const Order = () => {
  const [loading, setLoading] = useState(false);
  //   const [order, setOrder] = useState([]);
  // const user=useSelector(state=>state.user)
  console.log(setLoading);
  return (
    <>
      <MainContainer>
        <UpperAnnouncement />
        <Navbar />
        <LowerAnnouncement />
        <TopButtons>
          <div>
            <Link to="/products">
              <Button>Continue To Shop</Button>
            </Link>
          </div>
          <div>
            <h1>Your Orders</h1>
          </div>
        </TopButtons>
        {loading ? (
          <div className="d-flex justify-content-center m-5">
            <Loader type="TailSpin" color="#25283D" height={100} width={100} />
          </div>
        ) : (
          <Container>
            {/* orde.length>0? */}
            <table className="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Products</th>
                  <th scope="col">Shipping Address</th>
                  <th scope="col">Order Placed</th>
                </tr>
              </thead>
              <tbody>
                {/* {order.map((item) => { */}
                {/* return ( */}
                <tr>
                  <th scope="row">
                    {/* {item._id} */}
                    12
                  </th>
                  <td>
                    {/* {item.products.map((a) => {
                            return (
                              <>
                                <span>{a.productName}</span>
                                <br />
                              </>
                            );
                          })} */}
                    lipstick
                  </td>
                  <td>
                    coimbatore,India
                    {/* {item.address.city},{item.address.country} */}
                  </td>
                  <td>
                    today
                    {/* {new Date(item.createdAt).toDateString()} */}
                  </td>
                </tr>
                {/* ); */}
                {/* })} */}
              </tbody>
            </table>
            {/* ) : (
              <>
                <h2 style={{ textAlign: "center", width: "100%" }}>
                  Your have not yet ordered any items
                </h2>
              </>
            )} */}
          </Container>
        )}
      </MainContainer>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Order;
