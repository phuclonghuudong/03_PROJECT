import React from "react";
import logo from "../../assets/logo.png";
import { Avatar, Badge, Col, Dropdown, Input, Row } from "antd";
import {
  HomeOutlined,
  MenuOutlined,
  PhoneFilled,
  ShoppingCartOutlined,
  UserOutlined,
  ZoomInOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import TextHeader from "./TextHeader";
import { Wrapper03_div, WrapperContainer03, WrapperDiv, WrapperDivContainer, WrapperIcon } from "./style";
import InputHeader from "./InputHeader";
import IconButtonHeader from "./IconButtonHeader";
import ButtonMenuHeader from "./ButtonMenuHeader";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        <TextHeader text="Đăng nhập" />
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        <TextHeader text="Đăng ký" />
      </a>
    ),
  },
];

const HeaderComponents = () => {
  return (
    <Row style={{ height: "80px", margin: "0 10px" }} align={"center"} justify="space-between">
      <Col xs={4} sm={4} md={4} lg={0} xl={0}>
        <ButtonMenuHeader icon={<MenuOutlined />} />
      </Col>

      <Col xs={8} sm={4} md={4} lg={2} xl={2} align="center">
        <img align="center" src={logo} style={{ height: "60px", width: "60px", padding: "10px" }} />
      </Col>

      <Col xs={0} sm={0} md={0} lg={18} xl={18}>
        <WrapperDivContainer>
          <WrapperDiv>
            <WrapperIcon>
              <PhoneFilled style={{ fontSize: "22px" }} />
            </WrapperIcon>
            <TextHeader text="hotline:" />
            <TextHeader text="0347781024 | 0763036308" color="#FF1C48" fontWeight="bold" fontSize="15px" />
          </WrapperDiv>

          <WrapperDiv>
            <WrapperIcon>
              <HomeOutlined style={{ fontSize: "22px" }} />
            </WrapperIcon>
            <TextHeader text="hệ thống cửa hàng" />
          </WrapperDiv>

          <WrapperDiv>
            <Row>
              <Col xs={0} sm={0} md={0} lg={0} xl={24}>
                <InputHeader placeholder="Tìm sản phẩm..." width="300px" />
              </Col>
              <Col xs={0} sm={0} md={0} lg={24} xl={0}>
                <InputHeader placeholder="Tìm sản phẩm..." width="200px" />
              </Col>
            </Row>
          </WrapperDiv>
        </WrapperDivContainer>
      </Col>

      <Col xs={7} sm={5} md={4} lg={4} xl={4}>
        <WrapperContainer03>
          <Wrapper03_div>
            <IconButtonHeader icon={<ZoomInOutlined />} text="TRA CỨU" />
          </Wrapper03_div>

          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Wrapper03_div>
              <IconButtonHeader icon={<UserOutlined />} text="Tài khoản" />
            </Wrapper03_div>
          </Dropdown>

          <Wrapper03_div>
            <Badge count={9} offset={[-10, 7]} size="middle">
              <IconButtonHeader icon={<ShoppingCartOutlined />} text="Giỏ hàng" />
            </Badge>
          </Wrapper03_div>
        </WrapperContainer03>
      </Col>
    </Row>
  );
};

export default HeaderComponents;
