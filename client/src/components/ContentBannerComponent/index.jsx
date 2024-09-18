import React from "react";
import { Col, Row } from "antd";
import type01 from "../../assets/type01.png";
import type02 from "../../assets/type02.png";
import type03 from "../../assets/type03.png";
import type04 from "../../assets/type04.png";
import { WrapperContentBanner, WrapperDivContent, WrapperImage, WrapperSpan } from "./style";

const ContentBannerComponent = () => {
  const listItem = [
    { title: "Vợt cầu lông", image: type01 },
    { title: "Giày cầu lông", image: type02 },
    { title: "Áo cầu lông", image: type03 },
    { title: "Phụ kiện cầu lông", image: type04 },
  ];
  return (
    <Row style={{ margin: "0 35px", marginBottom: "30px" }} gutter={[16, 24]}>
      {listItem.map((items) => {
        return (
          <Col xs={24} sm={12} md={6} lg={6} xl={6} style={{ paddingBottom: "10px" }}>
            <WrapperDivContent>
              <div style={{ height: "270px", width: "270px", position: "relative" }}>
                <WrapperImage src={items.image} alt="slider" preview="false" />

                <WrapperContentBanner>
                  <WrapperSpan>{items.title}</WrapperSpan>
                </WrapperContentBanner>
              </div>
            </WrapperDivContent>
          </Col>
        );
      })}
    </Row>
  );
};

export default ContentBannerComponent;
