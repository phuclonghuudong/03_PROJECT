import React from "react";
import { WrapperDiv } from "./style";
import { RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

const TitlePageComponent = ({ title, titleType, titleProduct, color }) => {
  return (
    <Row className=" container-title-page">
      <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
      <Col xs={24} sm={24} md={24} lg={22} xl={22}>
        <div>
          <WrapperDiv>
            <NavLink to="/" className="hover-text" exact>
              Trang chủ
            </NavLink>
            <RightOutlined style={{ fontSize: "12px", padding: "0 5px" }} />
            <span className="hover-text">{title}</span>
            {!titleType ? (
              ""
            ) : (
              <>
                <RightOutlined style={{ fontSize: "12px", padding: "0 5px" }} />
                <span className="hover-text">{titleType}</span>
              </>
            )}
            {!titleProduct ? (
              ""
            ) : (
              <>
                <RightOutlined style={{ fontSize: "12px", padding: "0 5px" }} />
                <span className="hover-text" style={{ color: `${color ? "orange" : ""}` }}>
                  {titleProduct}
                </span>
              </>
            )}
          </WrapperDiv>
        </div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
    </Row>
  );
};

export default TitlePageComponent;
