import React from "react";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Container, Main } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
