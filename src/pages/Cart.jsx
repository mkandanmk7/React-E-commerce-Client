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

//styled comp
const MainContainer = styled.div``;
const TopButtons = styled.div``;
const Button = styled.div``;
const Container = styled.div``;
const OrderContainer = styled.div``;
const SummaryContainer = styled.div``;
const SummaryLine = styled.div``;

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

                <div style={{ color: "red" }}>
                  <p>IMP Note:</p>
                  <p>Please use the below credentials to checkout</p>
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
