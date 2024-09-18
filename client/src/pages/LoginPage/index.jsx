import React from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Row style={{ display: "grid", alignItems: "center", justifyContent: "center" }}>
      <div className="div_content_type_title" style={{ margin: "15px 0" }}>
        <TitleModulesComponent title="ĐĂNG NHẬP" />
        <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ marginTop: "10px" }}>
          <ProgressBarComponent />
        </Col>
      </div>

      <div>
        <GroupLabelInputComponent placeholder="Email/Số điện thoại" />
        <GroupLabelInputComponent placeholder="Mật khẩu" />
        <ButtonComponent title="ĐĂNG NHẬP" />
      </div>
      <div style={{ margin: "20px 0", color: "#333e44", textAlign: "right" }}>
        <NavLink to="/quen-mat-khau" style={{ color: "#333e44" }}>
          <span className="text">Quên mật khẩu </span>
        </NavLink>
        <NavLink to="/dang-ky" style={{ color: "#333e44" }}>
          <span className="text">Đăng ký tại đây </span>
        </NavLink>
      </div>
    </Row>
  );
};

export default LoginPage;
