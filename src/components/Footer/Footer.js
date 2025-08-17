import React from "react";
import FooterCardContainer from "./FooterCardContainer";
import Container from "../GlobalComponents/Container";
import "./Footer.scss";

const Footer = () => (
  <footer id="contact" className="footer">
    <FooterCardContainer />
    <Container>
      <p className="footer-text">
        &copy; {new Date().getFullYear()}, All rights reserved to Halyea Brown.
      </p>
    </Container>
  </footer>
);

export default Footer;
