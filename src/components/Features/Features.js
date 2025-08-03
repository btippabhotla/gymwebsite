/** @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import FeaturesCard from "./FeaturesCard";
import IconOne from "../Images/iconOne.svg";
import IconTwo from "../Images/iconTwo.svg";
import IconThree from "../Images/iconThree.svg";
import IconFour from "../Images/iconFour.svg";

const cardsData = [
  { cardImg: IconOne, cardTitle: "Build strength", cardDescription: "The strength you build in the gym will begin to reflect in everyday life!" },
  { cardImg: IconTwo, cardTitle: "Build discipline", cardDescription: "Discipline is the bridge between goals and accomplishment." },
  { cardImg: IconThree, cardTitle: "Build confidence", cardDescription: "Confidence comes not from always being right but from not fearing to be wrong." },
  { cardImg: IconFour, cardTitle: "Build a new you", cardDescription: "You'll be amazed at how much transformation 1 year can bring! All it takes is that first step!" },
];

const Features = () => (
  <section css={styles} className="features" id="about">
    <Title
      title="With me, you will..."
      // desc="There are many variations of passages of lorem Ipsum available, but the majority
      //   have suffered alteration."
    />
    <Container>
      {cardsData.map((card, idx) => (
        <FeaturesCard key={idx} cardImg={card.cardImg} cardTitle={card.cardTitle} cardDescription={card.cardDescription} />
      ))}
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 170px 0;
  background: #000;
  .container {
    display: flex;
    padding: 80px 0 0 0;
  }
  @media (max-width: 579px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 640px;
    }
  }
`;

export default Features;
