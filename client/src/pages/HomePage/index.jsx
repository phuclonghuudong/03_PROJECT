import React from "react";
import ServicesComponent from "../../components/ServicesComponent";
import TitleModulesComponent from "../../components/TitleModulesComponent";
import ContentBannerComponent from "../../components/ContentBannerComponent";

const HomePage = () => {
  return (
    <div>
      <ServicesComponent />
      <div>
        <TitleModulesComponent title="Sản phẩm mới" />
        <ContentBannerComponent />
      </div>
    </div>
  );
};

export default HomePage;
