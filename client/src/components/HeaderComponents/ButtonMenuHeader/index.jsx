import React from "react";
import { WrapperDivIcon, WrapperSpanIcon } from "./style";

const ButtonMenuHeader = ({ icon }) => {
  return (
    <WrapperDivIcon>
      <WrapperSpanIcon>{icon}</WrapperSpanIcon>
    </WrapperDivIcon>
  );
};

export default ButtonMenuHeader;
