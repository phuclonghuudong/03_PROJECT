import { Col, Row } from "antd";
import React from "react";
import product01 from "../../assets/product01.png";

const ButtonColorComponent = () => {
  // replace(/\B(?=(\d{3})+(?!\d))/g, ','
  return (
    <Row
      style={{
        border: "1px solid #f89008",
        padding: "5px",
        boxShadow: "0 2px 3px 0 rgba(0, 0, 0, .15)",
        borderRadius: "5px",
        background: "#FFFBF5",
      }}
    >
      <Col xs={6} sm={6} md={6} lg={6} xl={6} className="layout-center">
        <img src={product01} style={{ width: "100%" }} />
      </Col>
      <Col
        xs={18}
        sm={18}
        md={18}
        lg={18}
        xl={18}
        style={{
          fontSize: "13px",
          fontWeight: "500",
          justifyContent: "center",
          display: "grid",
        }}
      >
        <div>Silver/Sky Blue</div>
        <div style={{ color: "#dc3545" }}>1.339.999 đ</div>
      </Col>
    </Row>
  );
};

export default ButtonColorComponent;
