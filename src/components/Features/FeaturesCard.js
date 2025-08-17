import React from "react";
import "./FeaturesCard.scss";

const FeaturesCard = ({ cardImg, cardTitle, cardDescription }) => (
  <div className="featuresCard">
    <img src={cardImg} alt="icon" />
    <h3>{cardTitle}</h3>
    <p>{cardDescription}</p>
  </div>
);

export default FeaturesCard;
