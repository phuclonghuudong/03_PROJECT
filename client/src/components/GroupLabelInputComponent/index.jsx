import React, { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const GroupLabelInputComponent = ({ label, placeholder, value, onChange, isShow, typeInput, disabled }) => {
  //  placeholder
  // value
  // onChange={(e) => setTxtPassword(e.target.value)}
  // isShow: check condition
  // typeInput: type false:input or true:password
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = () => {
    if (showPass === true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };
  return (
    <div style={{ display: "grid", width: "100%", alignContent: "center" }}>
      {!label ? "" : <span className="label-text-input">{label}</span>}

      {!typeInput ? (
        " "
      ) : (
        <div style={{ position: "relative", height: "100%" }}>
          <div
            style={{ position: "absolute", top: "6px", right: "8px", cursor: "pointer", fontSize: "16px" }}
            onClick={() => handleShowPassword()}
          >
            {showPass ? <EyeFilled /> : <EyeInvisibleFilled />}
          </div>
        </div>
      )}

      <input
        type={!typeInput ? "" : showPass ? "" : "password"}
        className={isShow ? "input-error" : "input"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled ? true : false}
      />
    </div>
  );
};

export default GroupLabelInputComponent;
