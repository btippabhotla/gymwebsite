import React from "react";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import ImgOverlay from "../GlobalComponents/ImgOverlay";
import MainBgOne from "../Images/secondBackground.jpg";
import TrainerCard from "./TrainerCard";
import TeamOneBg from "../Images/aboutMe.jpg";
import "./Trainers.scss";
import { TRAINER_ABOUT_DESC, TRAINER_ABOUT_TITLE, TRAINER_NAME, TRAINER_ROLE } from "../Constants";

const Trainers = () => (
  <section
    className="trainers"
    id="pages"
    style={{
      // background: `#222 url(${MainBgOne}) no-repeat center/cover`,
      // position: `absolute`,
      // top: 0,
      // right: 0,
      // bottom: 0,
      // left: 0,
      
      //filter: `grayscale(100%)`
    }}
  >
    <ImgOverlay />
    <Container>
      <Title title={TRAINER_ABOUT_TITLE} desc={TRAINER_ABOUT_DESC} />
      <TrainerCard
        trainerName={TRAINER_NAME}
        trainerGender={TRAINER_ROLE}
        trainerImg={TeamOneBg}
      />
    </Container>
  </section>
);

export default Trainers;
