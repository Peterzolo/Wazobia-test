import React from "react";
import { styled } from "styled-components";

const Title: React.FC = () => {
  return <TitleWrap>This is the title</TitleWrap>;
};

const TitleWrap = styled.div`
  margin-left: 15px;
  padding: 10px 0;
  font-size: 25px;
  font-weight: 700;
`;

export default Title;
