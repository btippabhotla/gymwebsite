/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import ImgOverlay from "../GlobalComponents/ImgOverlay";
import MainBgOne from "../Images/secondBackground.jpg";
import TrainerCard from "./TrainerCard";
import TeamOneBg from "../Images/aboutMe.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="pages">
    <ImgOverlay />
    {/* <Title
      title="OUR TRAINERS"
      desc="There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration."
    /> */}
    <Container>
      <Title title="About Me" desc="A small hand full of years ago, I was in a place where a number of you may be in right now. I had found myself points away from being pre-diabetic and was nearly 200Lb at my heaviest. Barely into my mid-twenties, I knew I had to make a change. I had my whole life ahead of me! One day I stepped into the gym, no idea where to begin and quickly fell in love. My metamorphosis began in 2021. Shortly after, I knew with every fiber of my being I was meant to help others with their own! Let's get to work!" />
      <TrainerCard
        trainerName="Haylea Brown"
        trainerGender="Personal trainer"
        trainerImg={TeamOneBg}
      />
     
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 160px 0;
  text-align: center;
  position: relative;
  background: url('${MainBgOne}') no-repeat center/cover;
  .title{
    position: relative;
    z-index: 5;
  }
  .container {
    display: flex;
    justify-content: space-between;
    z-index: 6;
    position: relative;
    padding: 80px 0 0 0;
  }
  @media(max-width: 650px) {
    .title{
      padding: 0 40px;
    }
  }
  @media(max-width: 769px) {
      .container{
        max-width: 90%;
        flex-direction: column;
        align-items: center;
      }
  }
  @media(min-width: 770px) and (max-width: 1200px) {
    .container{
        max-width: 90%;
        flex-wrap: wrap;
      }
  }
`;

export default Trainers;
