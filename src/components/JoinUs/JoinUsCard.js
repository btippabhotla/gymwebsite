import React from "react";
import ImgOverlay from "../GlobalComponents/ImgOverlay";
import JoinUsInfo from "./JoinUsInfo";
import "./JoinUsCard.scss";

const JoinUsCard = ({ title, description }) => (
  <div className="card">
    <ImgOverlay />
    <JoinUsInfo title={title} description={description}/>
  </div>
);

export default JoinUsCard;
