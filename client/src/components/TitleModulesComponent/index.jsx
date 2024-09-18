import React from "react";
import { WrapperDiv, WrapperH2, WrapperSpan, WrapperTitle } from "./style";
import { Col } from "antd";

const TitleModulesComponent = ({ title }) => {
  return (
    <WrapperDiv>
      <WrapperTitle>{title}</WrapperTitle>

      <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ marginTop: "10px" }}>
        <WrapperH2>
          <WrapperSpan />
        </WrapperH2>
      </Col>
    </WrapperDiv>
  );
};

export default TitleModulesComponent;
