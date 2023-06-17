import React from "react";
import { styled } from "styled-components";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

const PlusDropdown: React.FC = () => {
  return (
    <MainWrap>
      <div className="title">EMBEDS</div>
      <div className="item-wrap">
        <PhotoCameraBackIcon className="icon" />
        <div className="text-wrap">
          <h5 className="text">Picture</h5>
          <p className="extra">jpeg,png</p>
        </div>
      </div>
      <div className="item-wrap">
        <PhotoCameraBackIcon className="icon" />
        <div className="text-wrap">
          <h5 className="text">Picture</h5>
          <p className="extra">jpeg,png</p>
        </div>
      </div>
      <div className="item-wrap">
        <PhotoCameraBackIcon className="icon" />
        <div className="text-wrap">
          <h5 className="text">Picture</h5>
          <p className="extra">jpeg,png</p>
        </div>
      </div>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  border: 1px solid #d9d9d9;
  margin-left: 20px;
  padding: 0px 10px;
  margin-top: 10px;
  .title {
    color: #595959;
    font-weight: 500;
  }
  .item-wrap {
    display: flex;
    width: 400px;
    justify-content: flex-start;
    .icon {
      margin-right: 10px;
    }
    .text-wrap {
      .text {
        font-size: 18px;
      }
      .extra {
        font-size: 12px;
      }
    }
  }
`;

export default PlusDropdown;
