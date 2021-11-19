import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Loader from "react-loader-spinner";
import { publicRequest } from "../axiosMethod";

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
  height: 450px;
  cursor: pointer;
  width: 14.5rem;
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

const Products = ({ filters }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const location = useLocation();

  const getProducts = async (filters) => {
    try {
      let res = await publicRequest.get("/product", { params: filters });
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    let newFilters = { ...filters };
    for (let key in newFilters) {
      console.log(key, newFilters[key]);
      if (newFilters[key].length === 0) {
        delete newFilters[key];
      } else if (Array.isArray(newFilters[key])) {
        newFilters[key] = newFilters[key].join(",");
      }
    }
    console.log(newFilters);
    getProducts(newFilters);
  }, [filters, location]);

  return (
    <Container>
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <Loader type="TailSpin" color="#25283D" height={100} width={100} />
        </div>
      ) : (
        <OuterCard>
          {products.map((item) => {
            return (
              <Link
                to={`/product/${item._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card>
                  <div>
                    <img
                      className="mt-0"
                      src={item.image_link}
                      alt="product"
                      style={{ objectFit: "cover" }}
                      width="170px"
                      height="150px"
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
              </Link>
            );
          })}
        </OuterCard>
      )}
    </Container>
  );
};

export default Products;
