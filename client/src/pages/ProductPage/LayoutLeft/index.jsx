import React from "react";
import { Col, Row } from "antd";
import TitleLeft from "./TitleLeft";
import ContentLeft from "./ContentLeft";

const LayoutLeft = () => {
  const listPrice = [
    { title: "Giá dưới 500.000đ" },
    { title: "500.000đ - 1 triệu" },
    { title: "1 - 2 triệu" },
    { title: "Giá trên 3 triệu" },
  ];
  const listWeight = [
    { title: "2U: 90 - 94g" },
    { title: "3U: 85 - 89g" },
    { title: "4U: 80 - 84g" },
    { title: "5U: 75 - 79g" },
    { title: "F: 70 - 74g" },
  ];
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={24} sm={24} md={24} lg={22} xl={22} className="container-product-left">
        <div className="container-product-left-content">
          <TitleLeft title="Chọn mức giá" />
          {listPrice.map((items) => {
            return <ContentLeft title={items.title} />;
          })}
        </div>
        <div className="container-product-left-content">
          <TitleLeft title="Trọng lượng" />
          {listWeight.map((items) => {
            return <ContentLeft title={items.title} />;
          })}
        </div>
        <div className="container-product-left-content">
          <TitleLeft title="Chiều dài cán vợt" />
          {listPrice.map((items) => {
            return <ContentLeft title={items.title} />;
          })}
        </div>
      </Col>
    </Row>
  );
};

export default LayoutLeft;
