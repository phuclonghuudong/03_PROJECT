import React from "react";
import TitlePageComponent from "../../components/TitlePageComponent";
import { Col, Row } from "antd";
import ButtonProductComponent from "./../../components/ButtonProductComponent/index";
import product01 from "../../assets/product01.png";
import GroupButtonQuantity from "./../../components/GroupButtonQuantity/index";

const CartPage = () => {
  return (
    <div>
      <TitlePageComponent title="Giỏ hàng" />
      <Row style={{ padding: "10px", height: "100%" }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: "10px" }}>
          <div className="title-cart">Giỏ hàng của bạn</div>
          <div className="title-cart-child">Giỏ hàng </div>
          <div className="cart-product-body">
            <Row className="cart-product">
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className="layout-center">
                <img src={product01} style={{ height: "auto", width: "80%" }} />
              </Col>

              <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                <Row style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                  <Col xs={24} sm={24} md={24} lg={10} xl={12} className="name-product-cart ">
                    Áo cầu lông Victor 281 Nữ - Trắng
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={2} xl={2} className="size-product-cart ">
                    Size: XL
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={5} xl={5}>
                    <div style={{ padding: "10px" }}>
                      <GroupButtonQuantity />
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={5}
                    xl={5}
                    className="price-product-cart "
                    style={{ textAlign: "right", padding: "0 10px" }}
                  >
                    160.000 đ
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row className="cart-footer">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              TỔNG TIỀN
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "right" }}>
              <span style={{ color: "red" }}>2.999.000 đ</span>
            </Col>
          </Row>

          <div className="layout-center">
            <ButtonProductComponent title="Tiếp tục mua hàng" colorBtn="#333" />
          </div>
          <div className="layout-center">
            <ButtonProductComponent title="Đặt hàng" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
