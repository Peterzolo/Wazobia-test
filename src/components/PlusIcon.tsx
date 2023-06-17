import React from "react";
import { styled } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import PlusDropdown from "./PlusDropdown";

const PlusIcon = () => {
  return (
    <MainWrap>
      <AddIcon className="plus-icon" />
      <PlusDropdown />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding: 8px 3px;
  height: 45px;
  margin-left: 5px;
  margin-top: 5px;
  padding: 0px 10px;
  .plus-icon {
    font-size: 40px;
    background-color: #d9d9d9;
    padding: 7px;
    border-radius: 20px;
  }
`;

export default PlusIcon;
