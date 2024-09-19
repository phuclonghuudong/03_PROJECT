import React from "react";

const ButtonSizeComponent = ({ title }) => {
  return (
    <button type="button" className="button-size">
      {/* class button-size-disabled */}
      {title}
    </button>
  );
};

export default ButtonSizeComponent;
