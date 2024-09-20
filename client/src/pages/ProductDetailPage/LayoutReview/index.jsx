import React from "react";
import { Col, Input, Row } from "antd";
import ButtonProductComponent from "./../../../components/ButtonProductComponent/index";
import { SendOutlined } from "@ant-design/icons";

const LayoutReview = () => {
  const { TextArea } = Input;
  return (
    <div
      style={{
        margin: "7px",
        backgroundColor: "#f9fafb",
        borderRadius: "10px",
        boxShadow: "0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)",
        padding: "10px",
        marginTop: "15px",
      }}
    >
      <div style={{ fontWeight: "500", fontSize: "1rem", margin: "0 0 10px 10px" }}>Bình luận</div>
      <Row>
        <Col xs={20} sm={20} md={20} lg={21} xl={20} className="layout-center">
          <TextArea
            rows={4}
            placeholder="Xin mời để lại câu hỏi, PHP sẽ trả lời bạn trong 2h, các câu hỏi sau 17h-8h sẽ được trả lời vào sáng hôm sau"
            maxLength={5}
            allowClear
          />
        </Col>
        <Col xs={4} sm={4} md={4} lg={3} xl={3} className="layout-center">
          <ButtonProductComponent title="Gửi" />
          {/* {<SendOutlined />} */}
        </Col>
      </Row>
    </div>
  );
};

export default LayoutReview;
