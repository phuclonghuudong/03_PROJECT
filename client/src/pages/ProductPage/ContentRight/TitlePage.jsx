import { Row } from "antd";
import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined, DownOutlined } from "@ant-design/icons";

const TitlePage = ({ title }) => {
  return (
    <Row className="title-page-product" justify="space-between">
      <span>{title}</span>
      <span style={{ textTransform: "capitalize", fontWeight: "500", fontSize: "14px" }}>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
        sắp xếp:{" "}
        <span style={{ fontWeight: "400" }}>
          Mặc định <DownOutlined />
        </span>
      </span>
    </Row>
  );
};

export default TitlePage;
