import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Badge, Col, Dropdown, Input, notification, Row, Spin } from "antd";
import {
  HomeOutlined,
  MenuOutlined,
  PhoneFilled,
  ShoppingCartOutlined,
  UserOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import TextHeader from "./TextHeader";
import { Wrapper03_div, WrapperContainer03, WrapperDiv, WrapperDivContainer, WrapperIcon } from "./style";
import InputHeader from "./InputHeader";
import IconButtonHeader from "./IconButtonHeader";
import ButtonMenuHeader from "./ButtonMenuHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/User.Services";
import { logoutUser } from "../../redux/authSlice";

const HeaderComponents = () => {
  const auth = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const items = !auth?.USER
    ? [
        {
          key: "1",
          label: (
            <NavLink to="/dang-nhap" className="nav-link" exact>
              <TextHeader text="Đăng nhập" />
            </NavLink>
          ),
        },
        {
          key: "2",
          label: (
            <NavLink to="/dang-ky" className="nav-link" exact>
              <TextHeader text="Đăng ký" />
            </NavLink>
          ),
        },
      ]
    : [
        {
          key: "1",
          label: (
            <NavLink to="/thanh-vien" className="nav-link" exact>
              <TextHeader text="Trang cá nhân" />
            </NavLink>
          ),
        },
        {
          key: "2",
          label: (
            // <NavLink to="" className="nav-link" exact>
            <div onClick={() => handleLogOut()}>
              <TextHeader text="Đăng xuất" />
            </div>
            // </NavLink>
          ),
        },
      ];

  const handleLogOut = async () => {
    setLoading(true);

    const result = await UserService.logoutUser();
    if (result?.EC === 0) {
      dispatch(logoutUser());
      notification.success({
        message: result?.EM,
      });
      navigate("/dang-nhap");
    } else {
      notification.error({
        message: result?.EM,
      });
    }
    setLoading(false);
  };
  return (
    <Row style={{ height: "80px", margin: "0 10px" }} align={"center"} justify="space-between">
      <Col xs={4} sm={4} md={4} lg={0} xl={0}>
        <ButtonMenuHeader icon={<MenuOutlined />} />
      </Col>

      <Col xs={8} sm={4} md={4} lg={2} xl={2} align="center">
        <img align="center" src={logo} style={{ height: "60px", width: "60px", padding: "10px" }} />
      </Col>

      <Col xs={0} sm={0} md={0} lg={18} xl={18}>
        <WrapperDivContainer>
          <WrapperDiv>
            <WrapperIcon>
              <PhoneFilled style={{ fontSize: "22px" }} />
            </WrapperIcon>
            <TextHeader text="hotline:" />
            <TextHeader text="0347781024 | 0763036308" color="#FF1C48" fontWeight="bold" fontSize="15px" />
          </WrapperDiv>

          <WrapperDiv>
            <WrapperIcon>
              <HomeOutlined style={{ fontSize: "22px" }} />
            </WrapperIcon>
            <TextHeader text="hệ thống cửa hàng" />
          </WrapperDiv>

          <WrapperDiv>
            <Row>
              <Col xs={0} sm={0} md={0} lg={0} xl={24}>
                <InputHeader placeholder="Tìm sản phẩm..." width="300px" />
              </Col>
              <Col xs={0} sm={0} md={0} lg={24} xl={0}>
                <InputHeader placeholder="Tìm sản phẩm..." width="200px" />
              </Col>
            </Row>
          </WrapperDiv>
        </WrapperDivContainer>
      </Col>

      <Col xs={7} sm={5} md={4} lg={4} xl={4}>
        <WrapperContainer03>
          <Wrapper03_div>
            <NavLink to="/kiem-tra-don-hang" style={{ color: "#333e44" }} exact>
              <IconButtonHeader icon={<ZoomInOutlined />} text="TRA CỨU" />
            </NavLink>
          </Wrapper03_div>

          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Wrapper03_div>
              <Spin spinning={loading} size="small">
                <IconButtonHeader icon={<UserOutlined />} text="Tài khoản" />
              </Spin>
            </Wrapper03_div>
          </Dropdown>

          <Wrapper03_div>
            <Badge count={9} offset={[-10, 7]} size="middle">
              <NavLink to="/gio-hang" style={{ color: "#333e44" }} exact>
                <IconButtonHeader icon={<ShoppingCartOutlined />} text="Giỏ hàng" />
              </NavLink>
            </Badge>
          </Wrapper03_div>
        </WrapperContainer03>
      </Col>
    </Row>
  );
};

export default HeaderComponents;
