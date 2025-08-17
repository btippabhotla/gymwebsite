import React from "react";
import Button from "../GlobalComponents/Button";
import "./JoinUsInfo.scss";

const JoinUsInfo = ({ title, description }) => (
  <div className="cardInfo">
    <h2>{title}</h2>
    <p>
      {description}
    </p>
    {/* <Button text="JOIN NOW" /> */}
  </div>
);

export default JoinUsInfo;
