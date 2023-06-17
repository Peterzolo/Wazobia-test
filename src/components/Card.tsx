import React from "react";
import { styled } from "styled-components";
import { colorSelector } from "../data";

interface CardProps {
  id?: number;
  image: string;
  title: string;
  body: string;
  footer: string;
  rating?: number;
  price?: number;
  apartmentType?: string;
  description?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  image,
  title,
  body,
  footer,
  rating,
  price,
  apartmentType,
  description,
  onClick,
}) => {
  const formattedPrice = price?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <CardWrapper onClick={onClick}>
      <CardImage src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-body">{body}</h4>
      </div>
      <div className="sub-content">
        <div className="price-wrap">
          <div className="sub-title">Starting Fee</div>
          <div className="sub">{formattedPrice}</div>
        </div>
        <div className="rating-wrap">
          <div className="sub-title">Rating</div>
          <div className="sub">{rating}</div>
        </div>
      </div>
      <div className="card-footer">
        <button className="card-btn">Check availability</button>
      </div>
      <div className="card-footer">
        <button className="card-btn">{footer}</button>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 400px;
  height: auto;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 10px;
  .card-content {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .card-title {
      color: ${colorSelector.buttonColor};
      font-size: 18px;
    }
    .card-body {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .sub-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    font-weight: 700;
    .price-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      background-color: ${colorSelector.lightGray};
      .sub-title {
        color: ${colorSelector.buttonColor};
      }
      .sub {
        color: ${colorSelector.assentColor};
      }
    }
    .rating-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      .sub-title {
        color: ${colorSelector.buttonColor};
      }
    }
  }
  .card-footer {
    margin-top: 3px;
    .card-btn {
      color: ${colorSelector.lightGray2};
      width: 100%;
      height: 40px;
      background-color: ${colorSelector.buttonColor};
      padding: 3px;
      border: none;
      outline: none;
      font-weight: 400;
    }
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
`;
