import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Loader from "react-loader-spinner";

//styled comp

const Container = styled.div`
  padding: 15px;
`;
const OuterCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  background-color: white;
  /* height: auto; */
  cursor: pointer;
  width: 13.5rem;
  padding: 15px;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s linear;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 8px;
  /* overflow: hidden; */

  /* hover */
  &:hover {
    transform: scale(0.95);
    box-shadow: rgb(38, 57, 77) 0px 20px 10px -10px;
  }
`;

const Products = () => {
  const [loading, setLoading] = useState(true);

  const data = [
    {
      name: "lipstick ajdfaeofajel;faf w;ef oawpj fewpaojfeiopwja feopjfawj ff; fewoafwaojf owafj",
      brand: "nykaa",
      price: "100",
      rating: 3,
      image_link:
        "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
    },
    {
      name: "mascara",
      brand: "nykaa",
      price: "200",
      rating: 4,
      image_link:
        "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb654afff/ProductImages/2018/Eyes/Worth_The_Hype_Volumizing_Mascara/800897140250_worththehypevolumizingmascara_main.jpg?sw=390&sh=390&sm=fit",
    },
  ];

  const getProducts = async () => {
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <Loader type="TailSpin" color="#25283D" height={100} width={100} />
        </div>
      ) : (
        <OuterCard>
          {data.map((item) => {
            return (
              <Card>
                <div>
                  <img
                    src={item.image_link}
                    alt="product"
                    style={{ objectFit: "cover" }}
                    width="170px"
                    height="220px"
                  />
                </div>
                <div>
                  <p>
                    <b>{item.name}</b>
                  </p>
                </div>
                <div>{item.brand}</div>
                <div>
                  <p>USD:{item.price}$</p>
                </div>
                <div>
                  <StarRatings
                    rating={item.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </div>
              </Card>
            );
          })}
        </OuterCard>
      )}
    </Container>
  );
};

export default Products;
