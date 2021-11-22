import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { medium, small } from "../responsive";

//styled comp

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: whitesmoke;
`;
const CartContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4rem;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;
  border: none;
  border-bottom: 2px solid #888;
  ${medium({ gap: "2rem" })}
  ${small({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  width: 100px;
  display: flex;
  height: 150px;
  object-fit: cover;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const ShadeSingle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${(props) => props.hexValue};
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
`;
const QuantityContainer = styled.div`
  margin-left: auto;

  min-width: 11rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-around;
  ${small({ marginLeft: "0" })}
`;
// const CartButton=styled.button`
// border: none;
// background-color: white;
// cursor: pointer;
// margin-right: 1rem;
// margin-left: 1rem;
// `
const Button = styled.button`
  border: none;
  background-color: #4dc52f;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  padding: 5px 15px;
`;

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <OuterContainer>
      {cart.products.map((product, index) => {
        return (
          <>
            <CartContainer>
              <ImageContainer>
                <img
                  src={product.image_link}
                  width="150rem"
                  alt="product"
                  style={{ objectFit: "cover" }}
                />
              </ImageContainer>
              <DetailsContainer>
                <div>
                  <h2>{product.name}</h2>
                </div>
                <div>
                  <p>{product.brand}</p>
                </div>
                {product.product_colors && (
                  <div>
                    color
                    <ShadeSingle
                      hexValue={product.product_colors}
                    ></ShadeSingle>
                  </div>
                )}
              </DetailsContainer>
              <QuantityContainer>
                <div>
                  <h4 style={{ display: "inline-block" }}>Quantity:</h4>
                  <h4 style={{ display: "inline-block" }}>
                    {product.quantity}
                  </h4>
                </div>
                <div>
                  <h3 style={{ marginLeft: "3.5rem", fontSize: "1.5rem" }}>
                    {product.quantity * product.price} $
                  </h3>
                </div>
                <div className="mx-auto">
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "removeItem",
                        itemNo: cart.products.indexOf(product),
                        product: product,
                      });
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </QuantityContainer>
            </CartContainer>
          </>
        );
      })}
    </OuterContainer>
  );
};

export default CartItem;
