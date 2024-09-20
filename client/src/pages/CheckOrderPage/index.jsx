import React from "react";
import TitlePageComponent from "../../components/TitlePageComponent";
import TitleHeadComponent from "../../components/TitleHeadComponent";
import GroupLabelInputComponent from "./../../components/GroupLabelInputComponent/";
import ButtonProductComponent from "./../../components/ButtonProductComponent";
import { Col, Row } from "antd";

const CheckOrderPage = () => {
  return (
    <div>
      <TitlePageComponent title="Kiểm tra đơn hàng" />
      <div style={{ padding: "0 10px" }}>
        <TitleHeadComponent text="Kiểm tra đơn hàng" />

        <Row>
          <Col xs={24} sm={24} md={12} lg={10} xl={8}>
            <GroupLabelInputComponent label="Mã đơn hàng/ Số điện thoại*" placeholder="Nhập..." />
            <div className="layout-center">
              <ButtonProductComponent title="TRA CỨU ĐƠN HÀNG" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CheckOrderPage;
