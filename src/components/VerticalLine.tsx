import React from "react";
import { styled } from "styled-components";

const VerticalLine: React.FC = () => {
  return <MainWrap>|</MainWrap>;
};

const MainWrap = styled.div`
  padding: 8px 3px;
  padding: 10px;
  height: 45px;
  margin-left: 5px;
`;

export default VerticalLine;
