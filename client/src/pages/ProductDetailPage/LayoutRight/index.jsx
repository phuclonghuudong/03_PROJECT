import React from "react";

const LayoutRight = () => {
  return (
    <div style={{ margin: "5px", border: "1px solid rgb(221, 221, 221)", borderRadius: "10px", paddingBottom: "10px" }}>
      <div className="layout-center">
        <div
          style={{
            fontWeight: "500",
            textTransform: "uppercase",
            fontSize: "16px",
            margin: "0",
            padding: "10px",
            borderBottom: "1px solid rgb(221, 221, 221)",
          }}
        >
          Danh mục sản phẩm
        </div>
        <div className="">
          <div style={{ padding: "5px 10px", textAlign: "left" }}>Vợt cầu lông</div>
          <div style={{ padding: "5px 10px", textAlign: "left" }}>Vợt cầu lông</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutRight;
