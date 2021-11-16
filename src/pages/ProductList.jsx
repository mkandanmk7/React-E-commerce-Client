import React from "react";
import styled from "styled-components";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import UpperAnnouncement from "../components/UpperAnnouncement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

//multi range slide comp
import MultiRangeSlider from "multi-range-slider-react";
import Products from "../components/Products";
import { large } from "../responsive";

//styled components
const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const OuterContainer = styled.div`
  margin: 2rem 8rem;
  display: flex;
  ${large({ margin: "2rem 0" })}
`;

const FilterContainer = styled.div`
  width: 20rem;
  min-width: 10rem;
  padding: 15px;

  position: sticky;
  align-self: flex-start;
  top: 0;
  height: 100vh;
  overflow-y: auto;
`;

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

            <BrandContainer>
              <p>
                <b>Items</b>
              </p>
              <CheckboxContainer>
                <div>
                  <label>Lipstick</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="lipstick"
                    value="lipstick"
                    checked={false}
                    //   onChange={(event) => {
                    //     handleProductType(event);
                    //   }}
                  />
                </div>
              </CheckboxContainer>
              <CheckboxContainer>
                <div>
                  <label>Foundation</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="foundation"
                    value="foundation"
                    checked={false}
                    //   onChange={(event) => {
                    //     handleProductType(event);
                    //   }}
                  />
                </div>
              </CheckboxContainer>
              <CheckboxContainer>
                <div>
                  <label>Mascara</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="mascara"
                    value="mascara"
                    checked={false}
                    //   onChange={(event) => {
                    //     handleProductType(event);
                    //   }}
                  />
                </div>
              </CheckboxContainer>
              <CheckboxContainer>
                <div>
                  <label>Eyeliner</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="eyeliner"
                    value="eyeliner"
                    checked={false}
                    //   onChange={(event) => {
                    //     handleProductType(event);
                    //   }}
                  />
                </div>
              </CheckboxContainer>
              <CheckboxContainer>
                <div>
                  <label>Bronzer</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="bronzer"
                    value="bronzer"
                    checked={false}
                    //   onChange={(event) => {
                    //     handleProductType(event);
                    //   }}
                  />
                </div>
              </CheckboxContainer>
              <CheckboxContainer>
                <div>
                  <label>Blush</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="blush"
                    value="blush"
                    checked={false}
                    //   onChange={(event) => {
                    //     handleProductType(event);
                    //   }}
                  />
                </div>
              </CheckboxContainer>
            </BrandContainer>
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
        </ProductsContainer>
      </OuterContainer>
      <Newsletter />
      <Footer />
    </MainContainer>
  );
};

export default ProductList;
