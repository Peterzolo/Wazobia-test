import React from "react";
import { styled } from "styled-components";

const Footer: React.FC = () => {
  return (
    <MainWrap>
      <p className="word-cound">0/1000 words</p>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  border: 1px solid #f0f0f0;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default Footer;
