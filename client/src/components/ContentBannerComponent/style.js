import styled from "styled-components";

export const WrapperDivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;
export const WrapperImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
`;
export const WrapperContentBanner = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
export const WrapperSpan = styled.p`
  background: rgba(233, 82, 17, 0.85);
  color: #fff;
  top: 50%;
  left: 40px;
  right: 40px;
  -webkit-transform: skew(-10deg) rotate(-10deg) translateY(-50%);
  transform: skew(-10deg) rotate(-10deg) translateY(-50%);
  padding: 10px;
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 23px;
`;
