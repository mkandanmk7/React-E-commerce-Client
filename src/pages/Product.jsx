import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Navbar from "../components/Navbar";
import UpperAnnouncement from "../components/UpperAnnouncement";
import { shades } from "../data";

//styled comps

const MainContainer = styled.div``;
const ImageContainer = styled.div``;
const DetailContainer = styled.div``;
const ProductName = styled.div``;
const ProductBrand = styled.div``;
const ProductPrice = styled.div``;
const ProductDesc = styled.div``;
const ShadesContainer = styled.div``;
const Shades = styled.div``;
const ShadeSingle = styled.div``;
const CartContainer = styled.div``;
const QuantityContainer = styled.div``;
const Button = styled.div``;

const Product = () => {
  //states
  //   let [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  let [shadeIn, setShade] = React.useState("");
  let [quantity, setQuantity] = React.useState(1);
  const id = useParams().productId;
  // const dispatch=useDispatch()
  const [alert, setAlert] = useState(true);
  const [error, setError] = useState(false);

  //product single

  const product = {
    name: "lipstick ajdfaeofajel;faf w;ef oawpj fewpaojfeiopwja feopjfawj ff; fewoafwaojf owafj",
    brand: "nykaa",
    price: "100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab fuga expedita maiores itaque, dolores voluptate eum. Harum deserunt eius architecto voluptatibus soluta debitis. Obcaecati iste ex animi voluptas accusantium",
    product_colors: [
      { hex_value: "#acd" },
      { hex_value: "#fcd" },
      { hex_value: "#13d" },
      { hex_value: "#aff" },
    ],
    rating: 3,
    image_link:
      "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
  };

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

        {loading ? (
          <div className="d-flex justify-content-center m-5">
            <Loader type="TailSpin" color="#25283D" height={100} width={100} />
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
                        {product.product_colors.map((shade) => {
                          return (
                            <ShadeSingle
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
              </CartContainer>
            </DetailContainer>
          </>
        )}
      </MainContainer>
    </>
  );
};

export default Product;
