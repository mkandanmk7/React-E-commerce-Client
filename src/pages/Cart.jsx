import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";
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
  justify-content: space-between;
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
  font-weight: 700;
  transition: 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;

    box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  }
  &:focus {
    color: #0f0;
  }
`;
const Container = styled.div`
  margin: 2rem 8rem;
  display: flex;
  gap: 2rem;
  ${large({ margin: "2rem 1rem", gap: "0" })}
  ${medium({ flexDirection: "column" })}
`;
const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 75%;
  height: 100%;
  gap: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${medium({ width: "100%" })}
`;
const SummaryContainer = styled.div`
  background-color: white;
  padding: 18px;
  width: 25%;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${medium({ width: "100%" })}
`;
const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Cart = () => {
  const [alert, setAlert] = useState(true);

  let cart = {
    total: 50,
    products: ["lipstick", "mascara", "nyx"],
  };

  return (
    <>
      <ToastContainer positon="top-end">
        <Toast
          bg={"danger"}
          style={{ width: "15rem", height: "3rem", padding: "5px" }}
          onClose={() => setAlert(false)}
          show={alert}
          delay={3000}
          autohide
        >
          Please Log in to proceed Check out..!
        </Toast>
      </ToastContainer>

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
            <h1>Your Bag</h1>
          </div>
          <div></div>
        </TopButtons>
        <Container>
          {cart.products.length > 0 ? (
            <>
              <OrderContainer>
                <CartItem />
              </OrderContainer>
              <SummaryContainer>
                <div>
                  <h3>SUMMARY</h3>
                </div>
                <SummaryLine>
                  <div>SubTotal</div>
                  <div> ${cart.total}</div>
                </SummaryLine>
                <SummaryLine>
                  <div>Shipping</div>
                  <div> $5</div>
                </SummaryLine>
                <SummaryLine>
                  <div>Shipping Discount</div>
                  <div> - $5</div>
                </SummaryLine>
                <SummaryLine>
                  <div>Total</div>
                  <div> ${cart.total}</div>
                </SummaryLine>

                {/* stipes */}
                {/* <div>
                  {user.currentUser ? (
                    <StripeCheckout
                      name="MakeYouUp"
                      image="https://source.unsplash.com/yd3mg93Smn8"
                      billingAddress
                      shippingAddress
                      description={`Your Cart Total is $ ${cart.total}`}
                      amount={cart.total * 100}
                      token={onToken}
                      stripeKey="pk_test_51JpnsFSJXTWe5Zf11N05XLzTKIGjBGK5H030E43f2cOWiJnaGM6fXqHt7FMEqLEs6BqbjZosPSLxGWgblW8V04CU00CSqFgR2n"
                    >
                      <Button>Checkout</Button>
                    </StripeCheckout>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          setAlert(true);
                        }}
                      >
                        checkOut
                      </Button>
                    </>
                  )}
                </div> */}

                <div className="text-danger my-5 ">
                  <p className="text-center bg-info p-3 text-light">
                    <b>IMPORTANT *</b>
                  </p>
                  <p>
                    <b>Please use the below credentials to checkout</b>
                  </p>
                  <p>
                    card number: <b>4242424242424242</b>
                  </p>
                  <p>
                    Expiry:<b> 02/22 or any future dates </b>
                  </p>
                  <p>
                    CVV: <b>222 or any three digit number</b>
                  </p>
                </div>
              </SummaryContainer>
            </>
          ) : (
            <>
              <h2 style={{ textAlign: "center", width: "100%" }}>
                Your Bag is empty
              </h2>
            </>
          )}
        </Container>
        <Newsletter />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Cart;
