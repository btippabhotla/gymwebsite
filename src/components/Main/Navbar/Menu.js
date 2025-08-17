import React from "react";
import "./Menu.scss";

const Menu = ({ openMenu }) => (
  <div className={openMenu ? "navMenu" : "hidden"}>
    <a className="navMenuA" href="#home">home</a>
    <a className="navMenuA" href="#about">about</a>
    {/* <a href="#pricing">pricing</a> */}
    <a className="navMenuA" href="#gallery">gallery</a>
    <a className="navMenuA" href="#pages">pages</a>
    <a className="navMenuA" href="#blog">blog</a>
    <a className="navMenuA" href="#contact">contact</a>
  </div>
);

export default Menu;
