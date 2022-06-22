import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/button";
import { LeftSection, Background } from "./HeroStyles";

const Hero = () => {
  return (
    <Section row>
      <LeftSection>
        <Background>
          <SectionTitle main>
            Welcome To <br /> My World
          </SectionTitle>
        </Background>
        <SectionText>
          I am an experienced Software Engineer who specialises in building
          quality websites and mobile applications with HTML, CSS and
          JavaScript.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://mail.google.com/mail/u/?authuser=samuelowusu958@gmail.com")
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
