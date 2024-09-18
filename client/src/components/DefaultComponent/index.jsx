import React from "react";
import HeaderComponents from "../HeaderComponents";
import MenuNavbarComponent from "../MenuNavbarComponent";
import SliderComponent from "../SliderComponent";
import slider01 from "../../assets/slider/slider01.png";
import slider02 from "../../assets/slider/slider02.png";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponents />
      <MenuNavbarComponent />
      <SliderComponent arrImages={[slider01, slider02]} />
      {children}
    </div>
  );
};

export default DefaultComponent;
