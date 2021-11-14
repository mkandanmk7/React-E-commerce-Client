import React from "react";
import { Carousel } from "react-responsive-carousel";
// carousel css file
import "react-responsive-carousel/lib/styles/carousel.min.css";

// images
import nykaa from "../assets/sliderImages/nykaa.jpg";
import colorpop from "../assets/sliderImages/colorpop.gif";
import eyeliner from "../assets/sliderImages/eyeliner.jpg";
import all from "../assets/sliderImages/all.jpg";
import all1 from "../assets/sliderImages/all2.gif";
import styled from "styled-components";
import { small } from "../responsive";

const SliderDiv = styled.div`
  ${small({ display: "none" })}
`;

const Slider = () => {
  return (
    <SliderDiv>
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={all}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={nykaa}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={colorpop}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={eyeliner}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={all1}
            alt="slideimage"
          />
        </div>
      </Carousel>
    </SliderDiv>
  );
};

export default Slider;
