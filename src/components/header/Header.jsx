import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Portfolio,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href={"/"}>
          <Portfolio
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <DiCssdeck size={"3rem"} />
            <span style={{ fontSize: "2rem" }}>Portfolio</span>
          </Portfolio>
        </Link>
      </Div1>
      <Div2>
        <li style={{ marginRight: "10px" }}>
          <Link href={"#projects"}>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li style={{ marginRight: "10px" }}>
          <Link href={"#tech"}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href={"#about"}>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
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
      </Div3>
    </Container>
  );
};

export default Header;
