import React from "react";
import { HomeOutlined, MenuOutlined, PhoneFilled, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { Image } from "antd";
import { Col, Row } from "antd";
import { WrapperCol02, WrapperCol02_Div, WrapperCol02_Icon, WrapperCol02_Number, WrapperCol02_Span } from "./style";
import IconHeader from "./../IconHeaderComponent/index";
import InputHeader from "../InputHeader";

const HeaderComponent = () => {
  return (
    <Row style={{ height: "80px", alignItems: "center" }}>
      <Col xs={0} sm={4} md={2} lg={2} xl={2} style={{ textAlign: "center" }}>
        <Image src={logo} style={{ width: "60px", height: "60px" }} />
      </Col>

      <WrapperCol02 xs={12} sm={16} md={18} lg={16} xl={18}>
        <WrapperCol02_Div>
          <WrapperCol02_Icon>
            <PhoneFilled style={{ fontSize: "25px", height: "100%" }} />
          </WrapperCol02_Icon>
          <WrapperCol02_Span>HOTLINE: </WrapperCol02_Span>
          <WrapperCol02_Number> 0347781024 | 0763036308</WrapperCol02_Number>
        </WrapperCol02_Div>

        <WrapperCol02_Div>
          <WrapperCol02_Icon>
            <HomeOutlined style={{ fontSize: "25px", height: "100%" }} />
          </WrapperCol02_Icon>

          <WrapperCol02_Span>HỆ THỐNG CỬA HÀNG</WrapperCol02_Span>
        </WrapperCol02_Div>

        <InputHeader />
      </WrapperCol02>

      <Col xs={6} sm={4} md={4} lg={6} xl={4} style={{ display: "flex", justifyContent: "center" }}>
        <IconHeader icon={<MenuOutlined style={{ height: "33px" }} />} text="TRA CỨU" />

        <IconHeader icon={<UserOutlined style={{ height: "33px" }} />} text="TÀI KHOẢN" />

        <IconHeader icon={<ShoppingCartOutlined style={{ height: "33px" }} />} text="GIỎ HÀNG" />
      </Col>
    </Row>
  );
};

export default HeaderComponent;
