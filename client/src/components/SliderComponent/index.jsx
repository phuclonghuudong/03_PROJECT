import React from "react";
import { Image } from "antd";
import { WrapperSliderDiv, WrapperSliderStyle } from "./style";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <WrapperSliderDiv>
      <WrapperSliderStyle {...settings}>
        {arrImages.map((image) => {
          return <Image key={image} src={image} alt="slider" preview={false} width="100%" height="100%" />;
        })}
      </WrapperSliderStyle>
    </WrapperSliderDiv>
  );
};

export default SliderComponent;
