import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { WrapperIcon, WrapperInput } from "./style";
import Dropdown from "antd/es/dropdown/dropdown";

const InputHeader = () => {
  const items = [
    {
      key: "1",
      type: "group",
      label: "TÌM KIẾM NHIỀU NHẤT",
      children: [
        {
          key: "1-1",
          label: "Vợt cầu lông",
        },
        {
          key: "1-2",
          label: "Giày cầu lông",
        },
        {
          key: "1-3",
          label: "Áo cầu lông",
        },
      ],
    },
    {
      key: "3",
      label: "Không tìm thấy kết quả",
      disabled: true,
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      style={{
        display: "flex",
        height: "40px",
        lineHeight: "40px",
        fontSize: "12px",
      }}
    >
      <a onClick={(e) => e.preventDefault()} style={{ minWidth: "300px" }}>
        <WrapperInput placeholder="Tìm sản phẩm..." variant="borderless" />
        <WrapperIcon>
          <SearchOutlined
            style={{
              color: " rgb(231, 83, 37)",
              width: "30px",
              verticalAlign: "middle",
              height: "30px",
              padding: "6px",
              float: "left",
              fontSize: "20px",
            }}
          />
        </WrapperIcon>
      </a>
    </Dropdown>
  );
};

export default InputHeader;
