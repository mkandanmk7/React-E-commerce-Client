import React from "react";

//brand images
import clinique from "../assets/Brands/clinique.png";
import maybelline from "../assets/Brands/maybelline.jpg";
import loreal from "../assets/Brands/loreal.jpg";
import covergirl from "../assets/Brands/covergirl.png";
import nyx from "../assets/Brands/nyx.jpg";
import colorpop from "../assets/Brands/colorpop.jpg";
//data
import { BrandData } from "../data";
import styled from "styled-components";
import { medium } from "../responsive";
import { Link } from "react-router-dom";

//css
const BrandContainer = styled.div`
  margin-top: 30px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 550;
  letter-spacing: 2.5px;
`;
const BrandOuter = styled.div`
  margin: 2rem 10rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  ${medium({ margin: "2rem 0" })}
`;
const BrandInner = styled.div`
  display: flex;

  height: 20rem;
  background-color: #efd9ce;
  transition: all 0.2s linear;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  /* box-shadow: 3px 3px 10px 7px #cea2ac; */
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(0.97);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

const BrandImage = styled.div`
  flex: 2;
  overflow: hidden;
`;

const BrandText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
`;
const BrandTitle = styled.div`
  font-size: 1.8rem;
  letter-spacing: 4px;
`;
const BrandDesc = styled.div`
  color: grey;
  & p {
    line-height: 1.3rem;
  }
`;
const BrandButton = styled.div`
  cursor: pointer;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  background-color: black;
  color: whitesmoke;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;

const Brands = () => {
  //brand images
  let brandArray = [clinique, maybelline, loreal, covergirl, nyx, colorpop];
  let i = -1;

  return (
    <BrandContainer>
      <hr />
      <Title>Featured Brands</Title>
      <BrandOuter>
        {BrandData.map((brand) => {
          i++;
          return (
            <BrandInner key={brand.id}>
              <BrandImage>
                <img
                  src={brandArray[i]}
                  height="430rem"
                  width="100%"
                  style={{ objectFit: "cover" }}
                  alt="brandimage"
                />
              </BrandImage>
              <BrandText>
                <BrandTitle>{brand.brandName}</BrandTitle>
                <BrandDesc>
                  <p>{brand.description}</p>
                </BrandDesc>
                <BrandButton>
                  <Button>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/products/brand/${brand.searchName}`}
                    >
                      <h3>Shop Now</h3>
                    </Link>
                  </Button>
                </BrandButton>
              </BrandText>
            </BrandInner>
          );
        })}
      </BrandOuter>
    </BrandContainer>
  );
};

export default Brands;
