import { Spin } from "antd";
import React from "react";

const ButtonProductComponent = ({ title, colorBtn, color, onClick, spinning }) => {
  return (
    <Spin spinning={!spinning ? false : true}>
      <button
        className="button-product"
        style={{
          background: colorBtn ? colorBtn : "#e95221",
          border: `1px solid ${colorBtn ? colorBtn : "#e95221"}`,
          color: color ? color : "#fff",
        }}
        onClick={() => onClick()}
      >
        {title}
      </button>
    </Spin>
  );
};

export default ButtonProductComponent;
