import React from "react";

const GroupButtonQuantity = () => {
  return (
    <div style={{ alignItems: "center", display: "flex", justifyContent: "start" }}>
      <button className="button-quantity">-</button>
      <input className="input-quantity" />
      <button className="button-quantity">+</button>
    </div>
  );
};

export default GroupButtonQuantity;
