import styled from "styled-components";

export const WrapperDiv = styled.div`
  margin-bottom: 35px;
  height: 55px;
  text-align: center;
  position: relative;
`;
export const WrapperTitle = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: #e95211;
`;
export const WrapperH2 = styled.div`
  width: 160px;
  height: 5px;
  background: #e5e9ed;
  /* position: absolute; */
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  border-radius: 3px;
`;
export const WrapperSpan = styled.span`
  content: "";
  background: #e95211;
  width: 50px;
  height: 5px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 1;
  border-radius: 3px;
`;
