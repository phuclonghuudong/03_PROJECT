import React from "react";

const ButtonProductComponent = ({ title, colorBtn, color, onClick }) => {
  return (
    <button
      className="button-product"
      style={{
        background: colorBtn ? colorBtn : "#e95221",
        border: `1px solid ${colorBtn ? colorBtn : "#e95221"}`,
        color: color ? color : "#fff",
      }}
      onClick={() =>onClick()}
    >
      {title}
    </button>
  );
};

export default ButtonProductComponent;
