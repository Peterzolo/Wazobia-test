import React from "react";
import { styled } from "styled-components";

const Button: React.FC = () => {
  return (
    <MainWrap>
      <button className="btn">Post</button>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .btn {
    background-color: green;
    color: white;
    padding: 5px 15px;
  }
`;

export default Button;
