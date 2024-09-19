import React from "react";
import { Col, Row } from "antd";
import TitlePage from "./TitlePage";
import ProductMain from "./ProductMain";

const ContentRight = () => {
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={23}>
        <TitlePage title="Vợt Cầu lông" />

        <ProductMain />
      </Col>
    </Row>
  );
};

export default ContentRight;
