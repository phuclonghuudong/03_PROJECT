import React, { useEffect, useState } from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, notification, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { isValidEmail } from "../../utils/checkInput";
import * as UserService from "../../services/User.Services";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [txtEmail, setTxtEmail] = useState("");
  const [txtPassword, setTxtPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    let check = isValidInput();
    if (check === true) {
      const result = await UserService.loginUser(txtEmail, txtPassword);

      if (result?.EC === 0) {
        notification.success({
          message: result?.EM,
        });
        localStorage.setItem("access_token", result?.DT?.ACCESS_TOKEN);

        if (result?.DT?.ACCESS_TOKEN) {
          const decoded = jwtDecode(result?.DT?.ACCESS_TOKEN);
          if (decoded?.id) {
            // await handleGetDetailUser(decoded?.id, result?.DT?.ACCESS_TOKEN);
            const getUser = await UserService.getDetailUser(decoded?.id, result?.DT?.ACCESS_TOKEN);
            if (getUser?.data?.EC === 0) {
              dispatch(loginSuccess({ USER: getUser?.data?.DT, ACCESS_TOKEN: result?.DT?.ACCESS_TOKEN }));
            }
          }
        }
        navigate("/");
      } else {
        notification.error({
          message: result?.EM,
        });
      }
    }
    setLoading(false);
  };

  // const handleKeyPressEnter = (event) => {
  //   if (event.charCode === 13 && event.code === "Enter") {
  //     handleLogin();
  //   }
  // };

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
                <ButtonProductComponent spinning={loading} title="ĐĂNG NHẬP" onClick={handleLogin} />
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
