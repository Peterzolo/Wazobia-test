import React from "react";
import { styled } from "styled-components";
import CircleIcon from "@mui/icons-material/Circle";

const BulletPoint: React.FC = () => {
  return (
    <MainWrap>
      <div className="text-wrap">
        <CircleIcon className="icon" />
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
        </p>
      </div>
      <div className="text-wrap">
        <CircleIcon className="icon" />
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
        </p>
      </div>
      <div className="text-wrap">
        <CircleIcon className="icon" />
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
        </p>
      </div>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding: 5px 15px;
  .text-wrap {
    display: flex;
    align-items: center;
    .icon {
      font-size: 8px;
      margin-right: 10px;
    }
    .text {
      font-size: 12px;
      margin-top: 5px;
    }
  }
`;
export default BulletPoint;
