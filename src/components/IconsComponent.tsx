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
import ImageUpload from "./ImageUpload";

const IconsComponent: React.FC = () => {
  const [textAlignment, setTextAlignment] = useState<
    "left" | "right" | "center"
  >("left");

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isListBulleted, setIsListBulleted] = useState(false);
  const [isListNumbered, setIsListNumbered] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleAlignLeft = () => {
    setTextAlignment("left");
  };

  const handleAlignCenter = () => {
    setTextAlignment("center");
  };

  const handleAlignRight = () => {
    setTextAlignment("right");
  };

  const handleBold = () => {
    setIsBold(!isBold);
  };

  const handleItalic = () => {
    setIsItalic(!isItalic);
  };

  const handleListBulleted = () => {
    setIsListBulleted(!isListBulleted);
  };

  const handleListNumbered = () => {
    setIsListNumbered(!isListNumbered);
  };

  const getListStyleType = () => {
    if (isListBulleted) {
      return "disc";
    }
    if (isListNumbered) {
      return "decimal";
    }
    return "none";
  };

  const handleImageUploadClick = () => {
    setShowImageUpload(!showImageUpload);
  };

  return (
    <>
      <MainWrap>
        <p className="icon-wrap">
          <div className="text">Paragraph</div>
          <ExpandMoreIcon className="icon" />{" "}
        </p>
        <p className="icon-wrap">
          <LinkIcon className="icon-left" />
          <PhotoCameraBackIcon
            className="icon"
            onClick={handleImageUploadClick}
          />{" "}
        </p>
        <p className="icon-wrap">
          <FormatAlignLeftIcon
            className={`icon-left ${textAlignment === "left" ? "active" : ""}`}
            onClick={handleAlignLeft}
          />
          <FormatAlignRightIcon
            className={`icon-middle ${
              textAlignment === "right" ? "active" : ""
            }`}
            onClick={handleAlignRight}
          />
          <FormatAlignCenterIcon
            className={`icon ${textAlignment === "center" ? "active" : ""}`}
            onClick={handleAlignCenter}
          />
        </p>
        <p className="icon-wrap">
          <FormatBoldIcon
            className={`icon-left ${isBold ? "active" : ""}`}
            onClick={handleBold}
          />
          <FormatItalicIcon
            className={`icon ${isItalic ? "active" : ""}`}
            onClick={handleItalic}
          />
        </p>
        <p className="icon-wrap">
          <FormatListBulletedIcon
            className={`icon-left ${isListBulleted ? "active" : ""}`}
            onClick={handleListBulleted}
          />
          <FormatListNumberedIcon
            className={`icon-middle ${isListNumbered ? "active" : ""}`}
            onClick={handleListNumbered}
          />
          <FormatIndentDecreaseIcon className="icon" />
        </p>
      </MainWrap>
      {showImageUpload && <ImageUpload />}
      <CommentWrapper>
        <p
          className={`comment ${textAlignment} ${isBold ? "bold" : ""} ${
            isItalic ? "italic" : ""
          }`}
        >
          {" "}
          {/* Add textAlignment class to align the text */}
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or maybe you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
      </CommentWrapper>
      <CommentWrapper>
        <div className="comment-title">It all begins with idea.</div>
        <p
          className={`comment ${textAlignment} ${isBold ? "bold" : ""} ${
            isItalic ? "italic" : ""
          }`}
        >
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or mayby you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
      </CommentWrapper>

      <CommentWrapper>
        <div className="comment-title">It all begins with idea.</div>
        <p
          className={`comment ${textAlignment} ${isBold ? "bold" : ""} ${
            isItalic ? "italic" : ""
          }`}
        >
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or mayby you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
      </CommentWrapper>
      <BulletWrapper>
        <ul className="text-wrap">
          <li className="text" style={{ listStyleType: getListStyleType() }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
          </li>
          <li className="text" style={{ listStyleType: getListStyleType() }}>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
          </li>
          <li className="text" style={{ listStyleType: getListStyleType() }}>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
          </li>

          <li className="text" style={{ listStyleType: getListStyleType() }}>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
          </li>
        </ul>
      </BulletWrapper>
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
`;

const CommentWrapper = styled.div`
  padding: 5px 15px;
  margin-top: 5px;
  .comment-title {
    font-weight: 700;
  }
  .comment {
    font-size: 14px;
    &.left {
      text-align: left;
    }
    &.center {
      text-align: center;
    }
    &.right {
      text-align: right;
    }
    &.bold {
      font-weight: bold;
    }
    &.italic {
      font-style: italic;
    }
  }
`;

const BulletWrapper = styled.div`
  .text-wrap {
    .text {
      list-style-type: none;
    }
  }
`;

export default IconsComponent;
