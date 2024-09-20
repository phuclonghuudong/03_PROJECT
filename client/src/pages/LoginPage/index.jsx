import React from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import { NavLink } from "react-router-dom";
import ButtonProductComponent from "../../components/ButtonProductComponent";

const LoginPage = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Row>
          <div className="div_content_type_title" style={{ margin: "15px 0" }}>
            <TitleModulesComponent title="ĐĂNG NHẬP" />
            <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ marginTop: "10px" }}>
              <ProgressBarComponent />
            </Col>
          </div>

          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: "0 10px" }}>
            <div className="layout-center">
              <GroupLabelInputComponent placeholder="Email/Số điện thoại" />
              <GroupLabelInputComponent placeholder="Mật khẩu" />
              <div className="layout-center">
                <ButtonProductComponent title="ĐĂNG NHẬP" />
              </div>
            </div>
          </Col>
          <Col style={{ margin: "20px 0", color: "#333e44", textAlign: "right", padding: "0 10px" }}>
            <NavLink to="/quen-mat-khau" style={{ color: "#333e44" }}>
              <span className="text">Quên mật khẩu </span>
            </NavLink>
            <NavLink to="/dang-ky" style={{ color: "#333e44" }}>
              <span className="text">Đăng ký tại đây </span>
            </NavLink>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
