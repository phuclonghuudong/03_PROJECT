import React from "react";
import TitlePageComponent from "../../components/TitlePageComponent";
import TitleHeadComponent from "../../components/TitleHeadComponent";
import GroupLabelInputComponent from "./../../components/GroupLabelInputComponent/";
import ButtonComponent from "./../../components/ButtonComponent/index";
import { styled } from "styled-components";

const CheckOrderPage = () => {
  return (
    <div>
      <TitlePageComponent />
      <div className="container">
        <TitleHeadComponent text="Kiểm tra đơn hàng" />

        <div style={{ width: "25%" }}>
          <GroupLabelInputComponent label="Mã đơn hàng/ Số điện thoại*" placeholder="Nhập..." />
          <ButtonComponent title="TRA CỨU ĐƠN HÀNG" />
        </div>
      </div>
    </div>
  );
};

export default CheckOrderPage;
