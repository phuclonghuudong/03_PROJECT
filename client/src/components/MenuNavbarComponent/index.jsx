import React from "react";
import { WrapperContainer, WrapperDiv, WrapperText } from "./style";
import { Col } from "antd";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

const MenuNavbarComponent = () => {
  return (
    <Col xs={0} sm={0} md={0} lg={24} xl={24}>
      <WrapperContainer>
        {routes.map((items) => {
          return items.showHeader === true ? (
            <WrapperDiv key={items}>
              <NavLink to={items?.path} className="nav-link" exact>
                <WrapperText>{items?.title}</WrapperText>
              </NavLink>
            </WrapperDiv>
          ) : (
            ""
          );
        })}
      </WrapperContainer>
    </Col>
  );
};

export default MenuNavbarComponent;
