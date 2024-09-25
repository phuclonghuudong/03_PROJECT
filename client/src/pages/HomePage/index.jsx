import React, { useEffect } from "react";
import ServicesComponent from "../../components/ServicesComponent";
import TitleModulesComponent from "../../components/TitleModulesComponent";
import ContentBannerComponent from "../../components/ContentBannerComponent";
import ProgressBarComponent from "../../components/ProgressBarComponent";
import { Col } from "antd";
import SliderComponent from "../../components/SliderComponent";
import slider01 from "../../assets/slider/slider01.png";
import slider02 from "../../assets/slider/slider02.png";

const HomePage = () => {
  return (
    <div>
      <SliderComponent arrImages={[slider01, slider02]} />
      <ServicesComponent />
      <div>
        <div className="div_content_type_title">
          <TitleModulesComponent title="Sản phẩm mới" />
          <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ marginTop: "10px" }}>
            <ProgressBarComponent />
          </Col>
        </div>

        <ContentBannerComponent />
      </div>
    </div>
  );
};

export default HomePage;
