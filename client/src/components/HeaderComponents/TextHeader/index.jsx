import React from "react";
import { WrapperText } from "./style";

const TextHeader = ({ text, color, fontWeight, fontSize }) => {
  return (
    <WrapperText
      style={{
        color: `${!color ? "#000" : color}`,
        fontWeight: `${!fontWeight ? "500" : fontWeight}`,
        fontSize: `${!fontSize ? "12px" : fontSize}`,
      }}
    >
      {text}
    </WrapperText>
  );
};

export default TextHeader;
