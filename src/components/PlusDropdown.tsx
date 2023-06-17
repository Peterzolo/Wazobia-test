import React from "react";
import { styled } from "styled-components";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import GroupsIcon from "@mui/icons-material/Groups";

const PlusDropdown: React.FC = () => {
  return (
    <MainContainer>
      <div className="title">EMBEDS</div>
      <MainWrap>
        <div className="item-wrap">
          <PhotoCameraBackIcon className="icon" />
          <div className="text-wrap">
            <h5 className="text">Picture</h5>
            <p className="extra">jpeg,png</p>
          </div>
        </div>
        <div className="item-wrap">
          <VideoCameraFrontIcon className="icon" />
          <div className="text-wrap">
            <h5 className="text">Video</h5>
            <p className="extra">Embed a YouTube video</p>
          </div>
        </div>
        <div className="item-wrap">
          <GroupsIcon className="icon" />
          <div className="text-wrap">
            <h5 className="text">Social</h5>
            <p className="extra">Embed a Facebook link</p>
          </div>
        </div>
      </MainWrap>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  .title {
    color: #595959;
    font-weight: 500;
    margin-left: 25px;
  }
`;

const MainWrap = styled.div`
  border: 1px solid #d9d9d9;
  margin-left: 20px;
  padding: 0px 10px;
  margin-top: 10px;

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
