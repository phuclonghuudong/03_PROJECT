import { Input } from "antd";
import styled from "styled-components";

export const WrapperInput = styled(Input)`
  background-color: #f3f3f3;
  margin: 5px 0;
  border-radius: 5px;
  background: #f3f3f3;
  position: relative;
  font-size: 13px;
  width: 100%;
`;
export const WrapperIcon = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 30px;
  /* line-height: 30px; */
  position: absolute;
  border: none;
  top: 0;
  right: 0;
  background: transparent;
  padding: 0px;
  text-align: center;
`;
