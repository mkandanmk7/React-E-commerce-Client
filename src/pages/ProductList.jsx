import React from "react";
import styled from "styled-components";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import UpperAnnouncement from "../components/UpperAnnouncement";

//multi range slide comp
import MultiRangeSlider from "multi-range-slider-react";
import Products from "../components/Products";

//styled components
const FilterContainer = styled.div``;

const MainContainer = styled.div``;

const OuterContainer = styled.div``;

const SortBy = styled.div``;

const BrandContainer = styled.div``;

const CheckboxContainer = styled.div``;

const ProductsContainer = styled.div``;

const ProductList = () => {
  return (
    <MainContainer>
      {/* common for top navigation */}
      <UpperAnnouncement />
      <Navbar />
      <LowerAnnouncement />
      <Slider />

      <OuterContainer>
        <FilterContainer>
          <SortBy>
            <label htmlFor="sort">
              <p>
                <b>SORT BY</b>
              </p>
            </label>
            <select
              style={{
                marginLeft: "auto",
                height: "2rem",
                maxWidth: "8rem",
                fontSize: "1rem",
              }}
            >
              <option disabled selected>
                Price Range
              </option>
              <option value="low">Lowest Price</option>
              <option value="high">Highest Price</option>
            </select>
          </SortBy>
          <div style={{ margin: "1rem 0" }}>
            <b>Filters</b>
          </div>
          <BrandContainer>
            <p>
              <b>Brands</b>
            </p>
            <CheckboxContainer>
              <div>
                <label>NYX</label>
              </div>
              <div>
                <input type="checkbox" name="nyx" value="nyx" checked="nyx" />
              </div>
            </CheckboxContainer>
            <CheckboxContainer>
              <div>
                <label>Clinique</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="clinique"
                  value="clinique"
                  //   checked="clinique"
                  //   onChange={(event) => {
                  //     handleBrand(event);
                  //   }}
                />
              </div>
            </CheckboxContainer>
            <CheckboxContainer>
              <div>
                <label>Maybelline</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="maybelline"
                  value="maybellibne"
                  checked="clinique"
                  //   onChange={(event) => {
                  //     handleBrand(event);
                  //   }}
                />
              </div>
            </CheckboxContainer>
            <CheckboxContainer>
              <div>
                <label>Covergirl</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="covergirl"
                  value="covergirl"
                  checked="clinique"
                  //   onChange={(event) => {
                  //     handleBrand(event);
                  //   }}
                />
              </div>
            </CheckboxContainer>
            <CheckboxContainer>
              <div>
                <label>L`oreal</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="loreal"
                  value="loreal"
                  checked="clinique"
                  //   onChange={(event) => {
                  //     handleBrand(event);
                  //   }}
                />
              </div>
            </CheckboxContainer>
            <CheckboxContainer>
              <div>
                <label>Colourpop</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="colourpop"
                  value="colourpop"
                  checked="clinique"
                  //   onChange={(event) => {
                  //     handleBrand(event);
                  //   }}
                />
              </div>
            </CheckboxContainer>
          </BrandContainer>
          <BrandContainer style={{ margin: "1.5rem 0" }}>
            <p>
              <b>Price Range</b>
            </p>
            <div>
              <MultiRangeSlider
                min={1}
                max={35}
                step={5}
                ruler={false}
                label={true}
                preventWheel={false}
                // minValue={minValue}
                // maxValue={maxValue}
                // onInput={(e) => {
                //   handleInput(e);
                // }}
              />
            </div>
          </BrandContainer>
        </FilterContainer>
        <ProductsContainer>
          <Products />
          <Products />
          <Products />
          <Products />
        </ProductsContainer>
      </OuterContainer>
    </MainContainer>
  );
};

export default ProductList;
