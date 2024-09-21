import React from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <Row style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className="div_content_type_title" style={{ margin: "15px 0" }}>
          <TitleModulesComponent title="ĐĂNG KÝ" />
          <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ marginTop: "10px" }}>
            <ProgressBarComponent />
          </Col>
        </div>
        <Col style={{ marginBottom: "10px", color: "#333e44", textAlign: "center" }}>
          <NavLink to="/dang-nhap" style={{ color: "#333e44" }}>
            <span className="text">Đã có tài khoản, đăng nhập tại đây </span>
          </NavLink>
        </Col>

        <Col style={{ padding: "0 10px" }}>
          <div className="layout-center">
            <GroupLabelInputComponent placeholder="Nhập tên của bạn (*)" />
            <GroupLabelInputComponent placeholder="Nhập Email của bạn (*)" />
            <GroupLabelInputComponent placeholder="Số điện thoại" />
            <GroupLabelInputComponent placeholder="Mật khẩu" />
            <GroupLabelInputComponent placeholder="Nhập lại mật khẩu" />
            <div className="layout-center">
              <ButtonProductComponent title="ĐĂNG KÝ" />
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default SignUpPage;
