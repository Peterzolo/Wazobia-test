import React from "react";
import { styled } from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const PlusIcon = () => {
  return (
    <MainWrap>
      <AddIcon className="plus-icon" />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding: 8px 3px;
  border: 1px solid #d9d9d9;
  padding: 0px 10px;
  height: 45px;
  margin-left: 5px;
  .plus-icon {
    font-size: 18px;
  }
`;

export default PlusIcon;
