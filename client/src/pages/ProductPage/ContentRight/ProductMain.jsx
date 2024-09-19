import { Col, Row } from "antd";
import React from "react";
import imgProduct from "../../../assets/product01.png";

const ProductMain = () => {
  return (
    <Row className="main-product-page-product">
      <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "10px", fontSize: "14px" }}>
        <img src={imgProduct} style={{ width: "100%" }} />
        <div>Áo cầu lông Victor 281 Nữ - Trắng</div>
        <div style={{ color: "red", fontWeight: "500" }}>160.000đ</div>
      </Col>
    </Row>
  );
};

export default ProductMain;
