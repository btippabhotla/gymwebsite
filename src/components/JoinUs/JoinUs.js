import React from "react";
import Container from "../GlobalComponents/Container";
import JoinUsCard from "./JoinUsCard";
import "./JoinUs.scss";

const JoinUs = () => {
  const personalizedDescription = 'Professional guidance to help you achieve your fitness goals with tailored workouts for women of all ages.';
  const nutritionalDescription = 'Expert advice on nutrition plans designed to complement your fitness routine and promote overall well-being.';
  
  return (
    <section className="joinUs" id="blog">
      <Container>
        <JoinUsCard title="Personalized programs" description={personalizedDescription}/>
        <JoinUsCard title="Nutritional guidance" description={nutritionalDescription}/>
      </Container>
    </section>
  );
};

export default JoinUs;
