import React from "react";
import TitlePageComponent from "./../../components/TitlePageComponent/index";
import { Col, Row } from "antd";
import LayoutLeft from "./LayoutLeft";
import LayoutMiddle from "./LayoutMiddle";
import LayoutRight from "./LayoutRight";
import LayoutBottom from "./LayoutBottom";
import LayoutReview from "./LayoutReview";

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
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <Row>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <LayoutLeft />
            </Col>

            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <LayoutMiddle />
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={124}>
              <LayoutBottom />
              <LayoutReview />
            </Col>
          </Row>
        </Col>

        <Col xs={0} sm={0} md={0} lg={6} xl={6}>
          <LayoutRight />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;
