import React from "react";
import "./Title.scss";

const Title = ({ title, desc }) => (
  <div className="title">
    <h2>{title}</h2>
    <p>{desc}</p>
  </div>
);

export default Title;
