import React, { useState } from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, notification, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import { NavLink } from "react-router-dom";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { isValidEmail } from "../../utils/checkInput";
import { loginUser } from "../../services/User.Services";

const LoginPage = () => {
  const [txtEmail, setTxtEmail] = useState();
  const [txtPassword, setTxtPassword] = useState();

  const defaultValid = {
    isValidEmail: false,
    isValidPassword: false,
  };
  const [objValid, setObjValid] = useState(defaultValid);

  const isValidInput = () => {
    setObjValid(defaultValid);

    const checkEmail = isValidEmail(txtEmail);

    if (!txtEmail) {
      setObjValid({ ...defaultValid, isValidEmail: true });
      notification.error({
        message: "Vui lòng nhập đầy đủ thông tin!",
      });
      return false;
    }
    if (!checkEmail) {
      setObjValid({ ...defaultValid, isValidEmail: true });
      notification.error({
        message: "Email không đúng định dạng!",
      });
      return false;
    }
    if (!txtPassword) {
      setObjValid({ ...defaultValid, isValidPassword: true });
      notification.error({
        message: "Vui lòng nhập mật khẩu!",
      });
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    let check = isValidInput();
    if (check === true) {
      const result = await loginUser(txtEmail, txtPassword);
      if (result && result?.EC === 0) {
        notification.success({
          message: result?.EM,
        });
      } else {
        notification.error({
          message: result?.EM,
        });
      }
    }
  };

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
              <GroupLabelInputComponent
                placeholder="Email/Số điện thoại"
                value={txtEmail}
                onChange={(e) => setTxtEmail(e.target.value)}
                isShow={objValid.isValidEmail}
              />
              <GroupLabelInputComponent
                placeholder="Mật khẩu"
                value={txtPassword}
                onChange={(e) => setTxtPassword(e.target.value)}
                isShow={objValid.isValidPassword}
                typeInput={true}
              />
              <div className="layout-center">
                <ButtonProductComponent title="ĐĂNG NHẬP" onClick={handleLogin} />
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
