import React, { useState } from "react";
import { styled } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import PlusDropdown from "./PlusDropdown";

const PlusIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <MainWrap>
      <AddIcon className="plus-icon" onClick={toggleDropdown} />
      {dropdownVisible && <PlusDropdown />}
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding: 8px 3px;
  margin-top: 5px;
  padding: 0px 10px;
  .plus-icon {
    font-size: 40px;
    background-color: #d9d9d9;
    padding: 7px;
    border-radius: 20px;
    margin-left: 24px;
  }
`;

export default PlusIcon;
