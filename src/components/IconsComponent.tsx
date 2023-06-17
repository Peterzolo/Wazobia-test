import React, { useState } from "react";
import { styled } from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";

interface CommentWrapperProps {
  alignLeft?: boolean;
  alignRight?: boolean;
  alignCenter?: boolean;
}

const IconsComponent: React.FC = () => {
  const [alignLeft, setAlignLeft] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const [alignCenter, setAlignCenter] = useState(false);

  const handleAlignLeftClick = () => {
    setAlignLeft(!alignLeft);
    setAlignRight(false);
    setAlignCenter(false);
  };

  const handleAlignRightClick = () => {
    setAlignRight(!alignRight);
    setAlignLeft(false);
    setAlignCenter(false);
  };

  const handleAlignCenterClick = () => {
    setAlignCenter(!alignCenter);
    setAlignLeft(false);
    setAlignRight(false);
  };

  return (
    <>
      <MainWrap>
        <p className="icon-wrap">
          <div className="text">Paragraph</div>
          <ExpandMoreIcon className="icon" />
        </p>
        <p className="icon-wrap">
          <LinkIcon className="icon-left" />
          <PhotoCameraBackIcon className="icon" />
        </p>
        <p className="icon-wrap" onClick={handleAlignLeftClick}>
          <FormatAlignLeftIcon
            className={`icon-left${alignLeft ? " active" : ""}`}
          />
          <FormatAlignRightIcon
            className={`icon-middle${alignRight ? " active" : ""}`}
            onClick={handleAlignRightClick}
          />
          <FormatAlignCenterIcon
            className={`icon${alignCenter ? " active" : ""}`}
            onClick={handleAlignCenterClick}
          />
        </p>
        <p className="icon-wrap">
          <FormatBoldIcon className="icon-left" />
          <FormatItalicIcon className="icon" />
        </p>
        <p className="icon-wrap">
          <FormatListBulletedIcon className="icon-left" />
          <FormatListNumberedIcon className="icon-middle" />
          <FormatIndentDecreaseIcon className="icon" />
        </p>
      </MainWrap>
      <CommentWrapper
        alignLeft={alignLeft}
        alignRight={alignRight}
        alignCenter={alignCenter}
      >
        <p className="comment">
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or mayby you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
      </CommentWrapper>

      <CommentWrapper>
        <div className="comment-title">It all begins with an idea.</div>
        <p className="comment">
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or mayby you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
      </CommentWrapper>

      <CommentWrapper>
        <div className="comment-title">It all begins with an idea.</div>
        <p className="comment">
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or mayby you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
      </CommentWrapper>
    </>
  );
};

const MainWrap = styled.div`
  margin-left: 20px;
  padding: 10px 0px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  .icon-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #d9d9d9;

    .text {
      font-size: 12px;
      margin-right: 15px;
    }
    .icon-left {
      font-size: 16px;
      margin-right: 15px;
    }
    .icon-middle {
      font-size: 16px;
      margin-right: 15px;
    }
    .icon {
      font-size: 16px;
    }
  }
  .active {
    color: blue; /* Adjust the color as desired */
  }
`;

const CommentWrapper = styled.div<CommentWrapperProps>`
  padding: 5px 15px;
  margin-top: 5px;
  cursor: pointer;
  text-align: ${(props) => {
    if (props.alignLeft) return "left";
    if (props.alignRight) return "right";
    if (props.alignCenter) return "center";
    return "inherit";
  }};

  .comment-title {
    font-weight: 700;
  }
  .comment {
    font-size: 14px;
  }
`;

export default IconsComponent;
