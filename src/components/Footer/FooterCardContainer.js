import React from "react";
import Button from "../GlobalComponents/Button";
import './FooterCardContainer.scss';
// import {INSTAGRAM_URL} from "../constants/index.js";

const FooterCardContainer = () => (
  <div className="footerCardContainer">
    <div className="footerCard">
      <h2>Personal training by Halyea</h2>
      <p>Text or call: <a href="#/">(214) 407-4724</a></p>
      <a href="#/">getfitwithhaylea@gmail.com</a>
      <div className="footerSocials">
        <a href="https://www.instagram.com/haylea.brown/">Find me on Instagram</a>
      </div>
    </div>
    <div className="footerCard">
      <h2>Useful Links</h2>
      {/* <a href="#/">Pricing</a> */}
      <a href="#/">About</a>
      <a href="#/">Gallery</a>
      <a href="#/">Contact</a>
    </div>
    <div className="footerCard">
      <h2>Subscribe</h2>
      <div className="inputWrap">
        <input type="email" placeholder="Enter your mail" />
        <Button text="Subscribe" />
      </div>
      {/* <p>
        Esteem spirit temper too say adieus who direct esteem esteems luckily.
      </p> */}
    </div>
  </div>
);

export default FooterCardContainer;
