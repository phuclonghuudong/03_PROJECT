import React from "react";
import ServicesComponent from "../../components/ServicesComponent";
import TitleModulesComponent from "../../components/TitleModulesComponent";

const HomePage = () => {
  return (
    <div>
      <ServicesComponent />
      <div>
        <TitleModulesComponent title="Sản phẩm mới" />
      </div>
    </div>
  );
};

export default HomePage;
