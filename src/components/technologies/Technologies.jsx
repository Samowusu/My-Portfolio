import React from "react";
import { DiFirebase, DiReact, DiGitMerge } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux, SiFigma, SiAdobexd } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have a proven history of working with a wide range of technologies in
        the world of web development. Some of which have been listed below...
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            <DiReact size="3rem" />
            <ListParagraph>React JS</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <DiReact size="3rem" />
            <ListParagraph>React Native</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <TbBrandNextjs size="3rem" />
            <ListParagraph>Next JS</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <SiRedux size="2.5rem" />
            <ListParagraph>Redux</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <DiFirebase size="3rem" />
            <ListParagraph>Firebase</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <DiGitMerge size="3rem" />
            <ListParagraph>Git</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <SiFigma size="2.5rem" />
            <ListParagraph>Figma</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <SiAdobexd size="2.5rem" />
            <ListParagraph>Adobe XD</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
