import { Col, Row } from "antd";
import React from "react";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { NavLink } from "react-router-dom";
import GroupLabelInputComponent from "./../../components/GroupLabelInputComponent/index";

const UpdateAccountPage = () => {
  return (
    <div>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} sm={24} md={18} lg={12} xl={12} style={{ padding: "10px 10px" }}>
          <div style={{ padding: "10px 0", fontSize: "19px", fontWeight: "600", textTransform: "uppercase" }}>
            Trang thông tin tài khoản
          </div>

          <NavLink to="/thanh-vien" className="nav-link" exact>
            <ButtonProductComponent title="Quay lại" />
          </NavLink>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} sm={24} md={18} lg={12} xl={12} style={{ padding: "10px 10px" }}>
          <div style={{ fontSize: "19px", fontWeight: "600", paddingBottom: "10px" }}>Thông tin tài khoản</div>

          <GroupLabelInputComponent label="Email *" />
          <GroupLabelInputComponent label="Họ tên *" />
          <GroupLabelInputComponent label="Số điện thoại *" />

          <div className="layout-center">
            <ButtonProductComponent title="Cập nhật" />
          </div>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} sm={24} md={18} lg={12} xl={12} style={{ padding: "10px 10px" }}>
          <div style={{ fontSize: "19px", fontWeight: "600", paddingBottom: "10px" }}>Đổi mật khẩu</div>

          <div style={{ fontWeight: "700" }}>
            <GroupLabelInputComponent label="Mật khẩu hiện tại *" typeInput={true} />
            <GroupLabelInputComponent label="Mật khẩu mới *" typeInput={true} />
            <GroupLabelInputComponent label="Nhập lại mật khẩu mới *" typeInput={true} />
          </div>

          <div className="layout-center">
            <ButtonProductComponent title="Đổi mật khẩu" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateAccountPage;
