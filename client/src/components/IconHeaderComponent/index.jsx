import React from "react";
import { WrapperDiv, WrapperIcon, WrapperSpan } from "./style";

const IconHeader = ({ icon, text }) => {
  return (
    <WrapperDiv>
      <WrapperIcon>{icon}</WrapperIcon>

      <WrapperSpan>{text}</WrapperSpan>
    </WrapperDiv>
  );
};

export default IconHeader;
