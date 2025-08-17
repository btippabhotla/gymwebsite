import React from "react";
import Button from "../GlobalComponents/Button";
import { MAIN_SUBTITLE, MAIN_TITLE } from "../Constants/index";
import "./MainInfo.scss";

const MainInfo = () => (
  <div className="mainInfo">
    <h2>{MAIN_TITLE}</h2>
    <p>{MAIN_SUBTITLE}</p>
    {/* <p>Build Your Body and Fitness with Professional Touch</p> */}
    {/* <Button text="JOIN US" /> */}
  </div>
);

export default MainInfo;
