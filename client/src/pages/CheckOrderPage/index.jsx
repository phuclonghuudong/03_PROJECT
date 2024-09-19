import React from "react";
import TitlePageComponent from "../../components/TitlePageComponent";
import TitleHeadComponent from "../../components/TitleHeadComponent";
import GroupLabelInputComponent from "./../../components/GroupLabelInputComponent/";
import ButtonProductComponent from "./../../components/ButtonProductComponent";

const CheckOrderPage = () => {
  return (
    <div>
      <TitlePageComponent title="Kiểm tra đơn hàng" />
      <div className="container">
        <TitleHeadComponent text="Kiểm tra đơn hàng" />

        <div style={{ width: "25%" }}>
          <GroupLabelInputComponent label="Mã đơn hàng/ Số điện thoại*" placeholder="Nhập..." />
          <div className="layout-center">
            <ButtonProductComponent title="TRA CỨU ĐƠN HÀNG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOrderPage;
