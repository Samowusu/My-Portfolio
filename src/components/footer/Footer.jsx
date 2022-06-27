import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SocialIcons } from "../header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +23355 216 8029">+23355 216 8029</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:samuelowusu958@gmail.com">
            samuelowusu958@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating...</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Samowusu">
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/samuel-baah-owusu-59b7b7124/">
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/vandal_NKB">
            <AiFillTwitterCircle size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/nana_de_actuary">
            <AiFillInstagram size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
