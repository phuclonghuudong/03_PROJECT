import React from "react";
import TitlePageComponent from "./../../components/TitlePageComponent/index";
import { Col, Row } from "antd";
import LayoutLeft from "./LayoutLeft";
import LayoutMiddle from "./LayoutMiddle";

const ProductDetailPage = () => {
  return (
    <div>
      <TitlePageComponent
        title="Áo cầu lông"
        titleType="Áo cầu lông Victor"
        titleProduct="Áo Cầu Lông Victor 281 Nữ - Trắng"
        color={true}
      />

      <Row style={{ margin: "20px 0" }}>
        <Col xs={24} sm={24} md={10} lg={8} xl={8}>
          <LayoutLeft />
        </Col>

        <Col xs={24} sm={24} md={14} lg={10} xl={10}>
          <LayoutMiddle />
        </Col>
        <Col xs={0} sm={0} md={0} lg={6} xl={6} style={{ background: "pink" }}></Col>
      </Row>
      <Row style={{ margin: "20px 0", background: "red", height: "100px" }}></Row>
    </div>
  );
};

export default ProductDetailPage;
