import React from "react";
import { styled } from "styled-components";

const BlankPage: React.FC = () => {
  return <MainWrap></MainWrap>;
};

const MainWrap = styled.div`
  padding: 8px 3px;
  border: 1px solid #d9d9d9;
  padding: 10px;
  height: 45px;
`;
export default BlankPage;
