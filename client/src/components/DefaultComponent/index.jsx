import React from "react";
import HeaderComponents from "../HeaderComponents";
import MenuNavbarComponent from "../MenuNavbarComponent";
import FooterComponent from "../FooterComponent";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponents />
      <MenuNavbarComponent />

      {children}
      <FooterComponent />
    </div>
  );
};

export default DefaultComponent;
