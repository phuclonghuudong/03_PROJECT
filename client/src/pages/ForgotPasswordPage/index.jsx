import React from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { NavLink } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <Row style={{ display: "grid", alignItems: "center", justifyContent: "center" }}>
      <div className="div_content_type_title" style={{ margin: "15px 0" }}>
        <TitleModulesComponent title="QUÊN MẬT KHẨU" />
        <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ marginTop: "10px" }}>
          <ProgressBarComponent />
        </Col>
      </div>

      <div>
        <GroupLabelInputComponent placeholder="Email/Số điện thoại" />
        <GroupLabelInputComponent placeholder="Mã Capcha" />
        <div className="layout-center">
          <ButtonProductComponent title="LẤY LẠI MẬT KHẨU" />
        </div>
      </div>
      <div style={{ margin: "20px 0", color: "#333e44", textAlign: "right" }}>
        <NavLink to="/dang-nhap" style={{ color: "#333e44" }}>
          <span className="text">Đăng nhập tại đây </span>
        </NavLink>
      </div>
    </Row>
  );
};

export default ForgotPasswordPage;
