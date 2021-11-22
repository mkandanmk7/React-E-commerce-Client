import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import { publicRequest } from "../axiosMethod";
import Footer from "../components/Footer";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import UpperAnnouncement from "../components/UpperAnnouncement";
import { shades } from "../data";
import { large, medium } from "../responsive";

//styled comps

const MainContainer = styled.div`
  background-color: whitesmoke;
`;
const Container = styled.div`
  margin: 2rem 8rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  ${large({ margin: "2rem 1rem" })}
  ${medium({ flexDirection: "column", alignItems: "center" })}
`;

const ImageContainer = styled.div`
  padding: 10px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 5px;
`;
const DetailContainer = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1px;
`;
const ProductName = styled.div``;
const ProductBrand = styled.div``;
const ProductPrice = styled.div``;
const ProductDesc = styled.div``;
const ShadesContainer = styled.div``;
const Shades = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
const ShadeSingle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${(props) => props.hexValue};
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  padding: 2px;
  transform: ${(props) =>
    props.shade === props.hexValue ? "scale(1.3)" : " "};
  border-radius: ${(props) => (props.shade === props.hexValue ? "10%" : " ")};
`;
const CartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;
const QuantityContainer = styled.div`
  padding: 4px;
  background-color: #acd;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.5rem 0;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;
const Button = styled.div`
  border: none;
  padding: 10px;
  border-radius: 50px;
  background-color: white;
  margin: 5px 10px 5px 10px;
  cursor: pointer;
  transition: 0.7s linear ease-in;
  &:focus {
    background: #38a536;
  }
`;

const AddToCartContainer = styled.div`
  margin: 1.5rem 0;
`;
const CartButton = styled.div`
  background-color: #4e4a4a;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border: none;
  cursor: pointer;
  height: 100%;
`;

const Product = () => {
  const id = useParams().productId;
  //states
  let [product, setProduct] = useState({});
  console.log("product details", product);
  const [loading, setLoading] = useState(true);
  let [shadeIn, setShade] = React.useState("");
  let [quantity, setQuantity] = React.useState(1);
  console.log(id);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const getProduct = async (id) => {
    try {
      console.log("in product");
      //id getting from url params ;
      let res = await publicRequest.get(`/product/find/${id}`);
      console.log(res);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  //handleshade
  const handleShade = (value) => {
    setShade(value);
  };

  //inc or dec
  const handleQuantity = (value) => {
    if (value === "inc") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  //add cart
  const handleCart = () => {
    console.log(product);
    let product_colors = shadeIn;
    let cartProduct = { ...product, quantity, product_colors };
    console.log(cartProduct);
    if (product.product_colors.length > 0) {
      if (cartProduct.product_colors.length > 0) {
        setAlert(true);
        dispatch({ type: "addProduct", payload: cartProduct });
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setAlert(true);
      dispatch({ type: "addProduct", payload: cartProduct });
      setError(false);
    }
  };

  return (
    <>
      {alert && (
        <ToastContainer postion="botton-end">
          <Toast
            bg={"success"}
            style={{ width: "15rem", height: "3rem", padding: "5px" }}
            onClose={() => setAlert(false)}
            show={alert}
            delay={3000}
            autohide
          >
            Your item is added to cart
          </Toast>
        </ToastContainer>
      )}
      <MainContainer>
        <UpperAnnouncement />
        <Navbar />
        <LowerAnnouncement />
        <Container>
          {loading ? (
            <div className="d-flex justify-content-center m-5">
              <Loader
                type="TailSpin"
                color="#25283D"
                height={100}
                width={100}
              />
            </div>
          ) : (
            <>
              <ImageContainer>
                <img
                  src={product.image_link}
                  alt="product"
                  style={{ objectFit: "contain" }}
                  width="350px"
                  height="500px"
                />
              </ImageContainer>
              <DetailContainer>
                <ProductName>
                  <h2>{product.name}</h2>
                </ProductName>
                <ProductBrand>
                  <p>{product.brand}</p>
                </ProductBrand>
                <ProductPrice>
                  <h2>{product.price} $</h2>
                </ProductPrice>
                <StarRatings
                  rating={product.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="2px"
                />
                <ProductDesc>
                  <p style={{ color: "grey" }}>{product.description}</p>
                </ProductDesc>
                {shades.length > 1 && (
                  <ShadesContainer>
                    {product.product_colors &&
                    product.product_colors.length > 0 ? (
                      <>
                        <h5>Choose Shades</h5>
                        <Shades>
                          {product.product_colors.map((shade, index) => {
                            return (
                              <ShadeSingle
                                key={index}
                                hexValue={shade.hex_value}
                                shade={shadeIn}
                                onClick={() => {
                                  handleShade(shade.hex_value);
                                }}
                              ></ShadeSingle>
                            );
                          })}
                        </Shades>
                        {error && (
                          <p style={{ color: "red", marginTop: "5px" }}>
                            Please choose one
                          </p>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </ShadesContainer>
                )}
                <CartContainer>
                  <QuantityContainer>
                    <Button
                      onClick={() => {
                        handleQuantity("dec");
                      }}
                    >
                      <Remove />
                    </Button>
                    <h3 style={{ display: "inline-block" }}>{quantity}</h3>
                    <Button
                      onClick={() => {
                        handleQuantity("inc");
                      }}
                    >
                      <Add />
                    </Button>
                  </QuantityContainer>
                  <AddToCartContainer>
                    <CartButton onClick={handleCart}>Add To Cart</CartButton>
                  </AddToCartContainer>
                </CartContainer>
              </DetailContainer>
            </>
          )}
        </Container>
        <Newsletter />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Product;
