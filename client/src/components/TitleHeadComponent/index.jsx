import React from "react";

const TitleHeadComponent = ({ text }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span style={{ fontSize: "40px", fontWeight: "500" }}>{text}</span>
    </div>
  );
};

export default TitleHeadComponent;
