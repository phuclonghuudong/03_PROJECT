import styled from "styled-components";
import { Col } from "antd";

export const WrapperCol01 = styled.div``;
export const WrapperCol02 = styled(Col)`
  background: "";
  padding-left: 0px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  border-bottom: 1px solid rgb(184 168 202);
  cursor: pointer;
`;
export const WrapperCol02_Div = styled.div`
  display: flex;
  font-weight: 500;
`;
export const WrapperCol02_Icon = styled.div`
  vertical-align: middle;
  height: 100%;
  width: 100%;
  padding-right: 10px;
  color: rgb(231, 83, 37);
`;
export const WrapperCol02_Span = styled.div`
  display: inline-block;
  /* font-size: 12px; */
  color: #000;
  text-transform: uppercase;
`;
export const WrapperCol02_Number = styled.span`
  display: inline-block;
  padding-left: 3px;
  font-size: 16px;
  font-weight: bold;
  color: #ff1c48;
  text-transform: uppercase;
`;
