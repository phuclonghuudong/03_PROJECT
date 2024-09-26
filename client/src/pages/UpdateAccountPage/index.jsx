import { Col, notification, Row } from "antd";
import React, { useEffect, useState } from "react";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { NavLink, useNavigate } from "react-router-dom";
import GroupLabelInputComponent from "./../../components/GroupLabelInputComponent/index";
import { useSelector } from "react-redux";

const UpdateAccountPage = () => {
  const user = useSelector((state) => state.auth.login);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRePassword, setNewRePassword] = useState("");

  const navigate = useNavigate();

  const [loadingUpdateUser, setLoadingUpdateUser] = useState(false);
  const [loadingUpdatePassword, setLoadingUpdatePassword] = useState(false);

  const defaultValidUser = {
    isValidEmail: false,
    isValidName: false,
    isValidPhone: false,
    isValidAddress: false,
  };
  const defaultValidPassword = {
    isValidPassword: false,
    isValidNewPassword: false,
    isValidNewRePassword: false,
  };

  const [objValidUser, setObjValidUser] = useState(defaultValidUser);
  const [objValidPassword, setObjValidPassword] = useState(defaultValidPassword);

  useEffect(() => {
    if (!user) {
      navigate("/dang-nhap");
      notification.warning({
        message: "Bạn chưa đăng nhập. Không thể thực hiện thao tác này!",
      });
    } else {
      setEmail(user?.USER?.email);
      setName(user?.USER?.name);
      setPhone(user?.USER?.phone);
      setAddress(user?.USER?.address);
    }
  }, [user]);

  const validUpdateUser = () => {
    setObjValidUser(defaultValidUser);

    if (!name) {
      setObjValidUser({ ...defaultValidUser, isValidName: true });
      notification.error({
        message: "Họ và tên không được để trống!",
      });
      return false;
    }
    if (!phone) {
      setObjValidUser({ ...defaultValidUser, isValidPhone: true });
      notification.error({
        message: "Số điện thoại không được để trống!",
      });
      return false;
    }
    return true;
  };
  const validUpdatePassword = () => {
    setObjValidPassword(defaultValidPassword);

    if (!password) {
      setObjValidPassword({ ...defaultValidPassword, isValidPassword: true });
      notification.error({
        message: "Xác nhận lại mật khẩu của bạn!",
      });
      return false;
    }
    if (!newPassword) {
      setObjValidPassword({ ...defaultValidPassword, isValidNewPassword: true });
      notification.error({
        message: "Nhập mật khẩu mới!",
      });
      return false;
    }
    if (!newRePassword) {
      setObjValidPassword({ ...defaultValidPassword, isValidNewRePassword: true });
      notification.error({
        message: "Nhập mật lại khẩu mới!",
      });
      return false;
    }
    return true;
  };

  const handleChangeUpdateUser = () => {
    setLoadingUpdateUser(true);
    console.log("name", name, "email", email, "address", address, "phone", phone);
    const check = validUpdateUser();
    if (check === true) {
      notification.warning({
        message: "user",
      });
    }
    setLoadingUpdateUser(false);
  };
  const handleChangePassword = () => {
    setLoadingUpdatePassword(true);

    const check = validUpdatePassword();

    if (check === true) {
      notification.success({
        message: "oke",
      });
    }
    setLoadingUpdatePassword(false);
  };
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnchangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleOnchangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnchangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleOnchangeNewRePassword = (e) => {
    setNewRePassword(e.target.value);
  };

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

          <GroupLabelInputComponent
            label="Email *"
            placeholder="Nhập thông tin..."
            value={email}
            onChange={handleOnchangeEmail}
            isShow={objValidUser.isValidEmail}
            disabled
          />
          <GroupLabelInputComponent
            label="Họ tên *"
            placeholder="Nhập thông tin..."
            value={name}
            onChange={handleOnchangeName}
            isShow={objValidUser.isValidName}
          />
          <GroupLabelInputComponent
            label="Số điện thoại *"
            placeholder="Nhập thông tin..."
            value={phone}
            onChange={handleOnchangePhone}
            isShow={objValidUser.isValidPhone}
          />
          <GroupLabelInputComponent
            label="Địa chỉ *"
            placeholder="Nhập thông tin..."
            value={address}
            onChange={handleOnchangeAddress}
            isShow={objValidUser.isValidAddress}
          />

          <div className="layout-center">
            <ButtonProductComponent title="Cập nhật" onClick={handleChangeUpdateUser} spinning={loadingUpdateUser} />
          </div>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} sm={24} md={18} lg={12} xl={12} style={{ padding: "10px 10px" }}>
          <div style={{ fontSize: "19px", fontWeight: "600", paddingBottom: "10px" }}>Đổi mật khẩu</div>

          <div style={{ fontWeight: "700" }}>
            <GroupLabelInputComponent
              label="Mật khẩu hiện tại *"
              placeholder="Nhập mật khẩu của bạn..."
              typeInput={true}
              value={password}
              onChange={handleOnchangePassword}
              isShow={objValidPassword.isValidPassword}
            />
            <GroupLabelInputComponent
              label="Mật khẩu mới *"
              placeholder="Xác nhận mật khẩu mới..."
              typeInput={true}
              value={newPassword}
              onChange={handleOnchangeNewPassword}
              isShow={objValidPassword.isValidNewPassword}
            />
            <GroupLabelInputComponent
              label="Nhập lại mật khẩu mới *"
              placeholder="Xác nhận lại mật khẩu mới..."
              typeInput={true}
              value={newRePassword}
              onChange={handleOnchangeNewRePassword}
              isShow={objValidPassword.isValidNewRePassword}
            />
          </div>

          <div className="layout-center">
            <ButtonProductComponent
              title="Đổi mật khẩu"
              onClick={handleChangePassword}
              spinning={loadingUpdatePassword}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateAccountPage;
