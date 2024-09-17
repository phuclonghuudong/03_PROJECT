import React from "react";
import { WrapperInput } from "./style";

const InputHeader = ({ placeholder, width }) => {
  return <WrapperInput style={{ width: `${width}` }} placeholder={placeholder} variant="borderless" />;
};

export default InputHeader;
