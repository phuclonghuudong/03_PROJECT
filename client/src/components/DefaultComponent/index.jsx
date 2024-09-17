import React from "react";
import HeaderComponents from "../HeaderComponents";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponents />
      {children}
    </div>
  );
};

export default DefaultComponent;
