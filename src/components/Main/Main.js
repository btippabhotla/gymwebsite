import React from "react";
import Overlay from "../GlobalComponents/Overlay";
import Nav from "./Navbar/Nav";
import Container from "../GlobalComponents/Container";
import MainInfo from "./MainInfo";
import "./Main.scss";

const Main = () => (
  <section className="main" id="home">
    <Overlay />
    <Nav />
    <Container>
      <MainInfo />
    </Container>
  </section>
);

export default Main;
