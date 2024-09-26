import React from "react";
import { Col, Row, Table } from "antd";
import { DingdingOutlined, EnvironmentFilled, PhoneFilled, UserOutlined } from "@ant-design/icons";
import { Span, Title, TitleColor, TitleContent, TitleP, TitlePage } from "./style";
import ButtonProductComponent from "./../../components/ButtonProductComponent/index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Đơn hàng",
    dataIndex: "order",
  },
  {
    title: "Ngày",
    dataIndex: "date",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
  {
    title: "Giá trị",
    dataIndex: "value",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
  },
];

const data = [
  {
    order: "1",
    date: "24/10/1999",
    address: "Long An",
    value: "100.000 đ",
    status: "OK",
  },
];
const AccountPage = () => {
  const auth = useSelector((state) => state.auth.login);

  return (
    <div style={{ margin: "10px 10px 30px 10px" }}>
      <Row style={{ display: "grid" }}>
        <TitlePage>Thông tin tài khoản</TitlePage>
        <span style={{ fontStyle: "italic", display: "flex" }}>
          Xin chào, <TitleColor> {auth?.USER?.name}</TitleColor>{" "}
        </span>
      </Row>

      <Row style={{ padding: "10px 0" }}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <TitleContent>Thông tin khách hàng</TitleContent>
          <Title>
            <TitleColor>
              <UserOutlined />
            </TitleColor>{" "}
            <Span>Họ tên:</Span>
            <TitleP>{auth?.USER?.name}</TitleP>
          </Title>
          <Title>
            <TitleColor>
              <DingdingOutlined />
            </TitleColor>{" "}
            <Span>Email:</Span>
            <TitleP>{auth?.USER?.email}</TitleP>
          </Title>

          <Title>
            <TitleColor>
              <PhoneFilled />
            </TitleColor>{" "}
            <Span>Số ĐT:</Span>
            <TitleP> {auth?.USER?.phone}</TitleP>
          </Title>

          <Title>
            <TitleColor>
              <EnvironmentFilled />
            </TitleColor>{" "}
            <Span>Địa chỉ:</Span>
            <TitleP>{auth?.USER?.address}</TitleP>
          </Title>

          <div>
            <NavLink to="/thanh-vien/thong-tin">
              <ButtonProductComponent title="Sửa thông tin" />
            </NavLink>
          </div>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <TitleContent>Đơn hàng của bạn</TitleContent>
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            // scroll={{
            //   x: "calc(700px + 50%)",
            //   y: 47 * 5,
            // }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AccountPage;
