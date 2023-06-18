import React from "react";
import { styled } from "styled-components";

interface BulletPointProps {
  bulletPointStyle: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ bulletPointStyle }) => {
  return (
    <MainWrap>
      <ul
        className={`text-wrap ${bulletPointStyle === "circle" ? "circle" : ""}`}
      >
        <li className="text">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
        </li>
        <li className="text">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
        </li>
        <li className="text">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
        </li>
        <li className="text">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. sed.
        </li>
      </ul>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  .text-wrap {
    display: flex;
    flex-direction: column;
    .text {
      list-style-type: none;
    }
    &.circle {
      .text {
        list-style-type: circle;
      }
    }
  }
`;

export default BulletPoint;
