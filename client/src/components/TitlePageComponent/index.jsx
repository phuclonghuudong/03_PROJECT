import React from "react";
import { WrapperDiv } from "./style";
import { RightOutlined } from "@ant-design/icons";

const TitlePageComponent = () => {
  return (
    <div className="container container-title-page">
      <WrapperDiv>
        Trang chủ <RightOutlined style={{ fontSize: "12px" }} />
        <span className="hover-text"> Kiểm tra đơn hàng</span>
      </WrapperDiv>
    </div>
  );
};

export default TitlePageComponent;
