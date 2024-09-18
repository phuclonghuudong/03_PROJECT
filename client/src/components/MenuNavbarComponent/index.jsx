import React from "react";
import { WrapperContainer, WrapperDiv, WrapperText } from "./style";
import { DownOutlined } from "@ant-design/icons";
import { Col } from "antd";

const MenuNavbarComponent = () => {
  const menuList = [
    { name: "Trang chủ", path: "", icon: "" },
    { name: "Sản phẩm", path: "", icon: <DownOutlined /> },
    { name: "Sale off", path: "", icon: "" },
    { name: "Tin tức", path: "", icon: "" },
    { name: "Chính sách nhượng quyền", path: "", icon: "" },
    { name: "Hướng dẫn", path: "", icon: "" },
    { name: "Giới thiệu", path: "", icon: "" },
    { name: "Liên hệ", path: "", icon: "" },
  ];
  return (
    <Col xs={0} sm={0} md={0} lg={24} xl={24}>
      <WrapperContainer>
        {menuList.map((items) => {
          return (
            <WrapperDiv>
              <WrapperText>
                {items.name} {items.icon}
              </WrapperText>
            </WrapperDiv>
          );
        })}
      </WrapperContainer>
    </Col>
  );
};

export default MenuNavbarComponent;
