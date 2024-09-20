import React from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { NavLink } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className="div_content_type_title" style={{ margin: "15px 0" }}>
          <TitleModulesComponent title="QUÊN MẬT KHẨU" />
          <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ marginTop: "10px" }}>
            <ProgressBarComponent />
          </Col>
        </div>

        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: "0 10px" }}>
          <GroupLabelInputComponent placeholder="Email/Số điện thoại" />
          <GroupLabelInputComponent placeholder="Mã Capcha" />
          <div className="layout-center">
            <ButtonProductComponent title="LẤY LẠI MẬT KHẨU" />
          </div>
        </Col>
        <div style={{ margin: "20px 0", color: "#333e44", textAlign: "right", padding: "0 10px" }}>
          <NavLink to="/dang-nhap" style={{ color: "#333e44" }}>
            <span className="text">Đăng nhập tại đây </span>
          </NavLink>
        </div>
      </Col>
    </Row>
  );
};

export default ForgotPasswordPage;
