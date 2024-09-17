import React from "react";
import { WrapperButton, WrapperContainer, WrapperText } from "./style";
import { Col } from "antd";

const IconButtonHeader = ({ icon, text }) => {
  return (
    <>
      <Col xs={24} sm={24} md={24} lg={24} xl={0} style={{ lineHeight: "60px" }}>
        <WrapperButton>{icon}</WrapperButton>
      </Col>

      {/* -------------XL */}
      <WrapperContainer>
        <Col xs={0} sm={0} md={0} lg={0} xl={24}>
          <WrapperButton>{icon}</WrapperButton>
          <WrapperText>{text}</WrapperText>
        </Col>
      </WrapperContainer>
    </>
  );
};

export default IconButtonHeader;
