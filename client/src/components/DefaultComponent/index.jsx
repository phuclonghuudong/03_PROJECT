import React from "react";
import HeaderComponents from "../HeaderComponents";
import MenuNavbarComponent from "../MenuNavbarComponent";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponents />
      <MenuNavbarComponent />

      {children}
    </div>
  );
};

export default DefaultComponent;
