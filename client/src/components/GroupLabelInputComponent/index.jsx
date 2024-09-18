import React from "react";

const GroupLabelInputComponent = ({ label, placeholder }) => {
  return (
    <div style={{ display: "grid", width: "100%", object: "cover" }}>
      {!label ? "" : <span className="label-text-input">{label}</span>}

      <input className="input" placeholder={placeholder} />
    </div>
  );
};

export default GroupLabelInputComponent;
