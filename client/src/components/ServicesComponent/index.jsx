import React from "react";
import { WrapperDivContainer, WrapperDivSpan, WrapperSpanUppercase } from "./style";
import { Col, Row } from "antd";
import { DingtalkCircleFilled, ScheduleFilled, StarFilled, TruckFilled } from "@ant-design/icons";

const ServicesComponent = () => {
  const listItem = [
    {
      text01: "Vận chuyển",
      text02: "Thanh toán khi nhận hàng",
      textUpperCase01: "Toàn quốc",
      textUpperCase02: "",
      icon: <TruckFilled />,
    },
    {
      text01: "Bảo đảm chất lượng",
      text02: "Sản phẩm bảo đảm chất lượng",
      textUpperCase01: "",
      textUpperCase02: "",
      icon: <StarFilled />,
    },
    {
      text01: "Tiến hành",
      text02: "Với nhiều",
      textUpperCase01: "Thanh toán",
      textUpperCase02: "Phương thức",
      icon: <ScheduleFilled />,
    },
    {
      text01: "Đối với sản phẩm mới",
      text02: "nếu sản phẩm lỗi",
      textUpperCase01: "",
      textUpperCase02: "",
      icon: <DingtalkCircleFilled />,
    },
  ];

  return (
    <Row>
      {listItem.map((items) => {
        return (
          <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ padding: "0 15px", paddingBottom: "15px" }}>
            <WrapperDivContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "35px", paddingLeft: "10px" }}>{items.icon}</span>
                <WrapperDivSpan>
                  <span>
                    {items.text01} <WrapperSpanUppercase>{items.textUpperCase01}</WrapperSpanUppercase>
                  </span>
                  <span>
                    {items.text02} <WrapperSpanUppercase>{items.textUpperCase02}</WrapperSpanUppercase>
                  </span>
                </WrapperDivSpan>
              </div>
            </WrapperDivContainer>
          </Col>
        );
      })}
    </Row>
  );
};

export default ServicesComponent;
