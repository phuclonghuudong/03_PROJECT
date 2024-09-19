import { Checkbox } from "antd";
import React from "react";

const ContentLeft = ({ title }) => {
  return (
    <div className="content-product-left">
      <Checkbox></Checkbox>
      <span style={{ paddingLeft: "15px" }}>{title}</span>
    </div>
  );
};

export default ContentLeft;
