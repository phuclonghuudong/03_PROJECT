import React from "react";
import TitlePageComponent from "../../components/TitlePageComponent";

import { Col, Row } from "antd";
import LayoutLeft from "./LayoutLeft";
import ContentRight from "./ContentRight/index";

const ProductPage = () => {
  return (
    <div>
      <TitlePageComponent title="Vợt cầu lông" />

      <Row style={{ margin: "20px 0" }}>
        <Col xs={0} sm={0} md={0} lg={6} xl={6}>
          <LayoutLeft />
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <ContentRight />
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
