import { Col, Row } from "antd";
import React from "react";
import ButtonSizeComponent from "../../../components/ButtonSizeComponent";
import GroupButtonQuantity from "../../../components/GroupButtonQuantity";
import ButtonProductComponent from "../../../components/ButtonProductComponent";

const LayoutMiddle = () => {
  const size = [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }, { name: "2XL" }, { name: "3XL" }];
  return (
    <Row style={{ padding: "20px", display: "flow" }}>
      <Col style={{ lineHeight: "2", fontSize: "14px" }}>
        <div style={{ fontSize: "26px", fontWeight: "600" }}>Áo Cầu Lông Victor 281 Nữ - Trắng</div>
        <div>
          Mã: <span style={{ color: "#E95221", textTransform: "uppercase" }}>VNB020330</span>
        </div>
        <div>
          Thương hiệu: <span style={{ color: "#E95221" }}>Victor</span>
        </div>
        <div>
          Tình trạng: <span style={{ color: "#E95221" }}>Còn hàng</span>
        </div>

        <div style={{ borderBottom: "1px solid #DDE1EF", paddingBottom: "5px" }}>
          <span style={{ color: "#e8002d", fontSize: "22px", fontWeight: "bold", paddingRight: "5px" }}>160.000 đ</span>
          <span style={{ color: "#acacac", fontSize: "16px", paddingRight: "5px" }}>Giá niêm yết:</span>
          <span style={{ color: "#acacac", fontSize: "16px", textDecoration: "line-through" }}>190.000 đ</span>
        </div>

        <div>
          <span>Chọn size:</span>
          {size.map((items) => {
            return <ButtonSizeComponent title={items.name} />;
          })}
        </div>
        <GroupButtonQuantity />

        <div style={{ margin: "10px 0" }}>
          <ButtonProductComponent title="Mua ngay" colorBtn="#ffb916" />
          <ButtonProductComponent title="Thêm vào giỏ hàng" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <ButtonProductComponent title="thanh toán thẻ" colorBtn="#e90707" />

          <ButtonProductComponent title="mua trả góp" colorBtn="#f1eb1f" color="#235d97" />
        </div>
      </Col>
    </Row>
  );
};

export default LayoutMiddle;
