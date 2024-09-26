import React, { useState } from "react";
import TitleModulesComponent from "./../../components/TitleModulesComponent/index";
import ProgressBarComponent from "./../../components/ProgressBarComponent/index";
import { Col, notification, Row } from "antd";
import GroupLabelInputComponent from "../../components/GroupLabelInputComponent";
import ButtonProductComponent from "../../components/ButtonProductComponent";
import { NavLink, useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword, isValidPhone } from "../../utils/checkInput";
import { createUser } from "../../services/User.Services";

const RegisterPage = () => {
  const [txtName, setTxtName] = useState();
  const [txtPhone, setTxtPhone] = useState();
  const [txtEmail, setTxtEmail] = useState();
  const [txtPassword, setTxtPassword] = useState();
  const [txtConfirmPassword, setTxtConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const defaultValid = {
    isValidTxtName: false,
    isValidTxtEmail: false,
    isValidTxtPhone: false,
    isValidTxtPassword: false,
    isValidTxtConfirmPassword: false,
  };
  const [objCheckValid, setObjCheckValid] = useState(defaultValid);

  const isValidInputs = () => {
    setObjCheckValid(defaultValid);

    const checkEmail = isValidEmail(txtEmail);
    const checkPhone = isValidPhone(txtPhone);
    const checkPassword = isValidPassword(txtPassword);

    if (!txtName) {
      setObjCheckValid({ ...defaultValid, isValidTxtName: true });
      notification.error({
        message: "Vui lòng nhập đầy đủ họ tên!",
      });
      return false;
    }
    if (!txtEmail) {
      setObjCheckValid({ ...defaultValid, isValidTxtEmail: true });
      notification.error({
        message: "Vui lòng nhập đầy đủ email!",
      });
      return false;
    }
    if (!checkEmail) {
      setObjCheckValid({ ...defaultValid, isValidTxtEmail: true });
      notification.error({
        message: "Email không đúng định dạng!",
      });
      return false;
    }
    if (!txtPhone) {
      setObjCheckValid({ ...defaultValid, isValidTxtPhone: true });
      notification.error({
        message: "Vui lòng nhập đầy đủ số điện thoại!",
      });
      return false;
    }
    if (!checkPhone) {
      setObjCheckValid({ ...defaultValid, isValidTxtPhone: true });
      notification.error({
        message: "Số điện thoại không đúng định dạng!",
      });
      return false;
    }
    if (!txtPassword) {
      setObjCheckValid({ ...defaultValid, isValidTxtPassword: true });
      notification.error({
        message: "Vui lòng nhập mật khẩu!",
      });
      return false;
    }
    if (txtPassword.length < 8) {
      setObjCheckValid({ ...defaultValid, isValidTxtPassword: true });
      notification.error({
        message: "Mật khẩu phải nhiều hơn 8 ký tự!",
      });
      return false;
    }
    if (!checkPassword) {
      setObjCheckValid({ ...defaultValid, isValidTxtPassword: true });
      notification.error({
        message: `Mật khẩu phải bao gồm: "A-Z","a-z","@$!%*?&" `,
      });
      return false;
    }
    if (!txtConfirmPassword) {
      setObjCheckValid({ ...defaultValid, isValidTxtConfirmPassword: true });
      notification.error({
        message: "Vui lòng nhập lại mật khẩu!",
      });
      return false;
    }
    if (txtPassword !== txtConfirmPassword) {
      setObjCheckValid({ ...defaultValid, isValidTxtPassword: true, isValidTxtConfirmPassword: true });
      notification.error({
        message: "Vui lòng xác nhận lại mật khẩu!",
      });
      return false;
    }

    return true;
  };
  const handleRegister = async () => {
    setLoading(true);
    let check = isValidInputs();
    if (check === true) {
      const result = await createUser(txtName, txtEmail, txtPassword, txtConfirmPassword, txtPhone);

      if (result && result?.EC === 0) {
        notification.success({
          message: result?.EM,
        });
        navigate("/dang-nhap");
      } else {
        notification.error({
          message: result?.EM,
        });
      }
    }
    setLoading(false);
  };

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
            <GroupLabelInputComponent
              placeholder="Nhập tên của bạn (*)"
              value={txtName}
              onChange={(e) => setTxtName(e.target.value)}
              isShow={objCheckValid.isValidTxtName}
            />

            <GroupLabelInputComponent
              placeholder="Nhập Email của bạn (*)"
              value={txtEmail}
              onChange={(e) => setTxtEmail(e.target.value)}
              isShow={objCheckValid.isValidTxtEmail}
            />
            <GroupLabelInputComponent
              placeholder="Số điện thoại"
              value={txtPhone}
              onChange={(e) => setTxtPhone(e.target.value)}
              isShow={objCheckValid.isValidTxtPhone}
            />
            <GroupLabelInputComponent
              placeholder="Mật khẩu"
              value={txtPassword}
              onChange={(e) => setTxtPassword(e.target.value)}
              isShow={objCheckValid.isValidTxtPassword}
              typeInput={true}
            />
            <GroupLabelInputComponent
              placeholder="Nhập lại mật khẩu"
              value={txtConfirmPassword}
              onChange={(e) => setTxtConfirmPassword(e.target.value)}
              isShow={objCheckValid.isValidTxtConfirmPassword}
              typeInput={true}
            />
            <div className="layout-center">
              <ButtonProductComponent spinning={loading} title="ĐĂNG KÝ" onClick={handleRegister} />
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default RegisterPage;
