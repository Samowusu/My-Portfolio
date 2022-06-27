import BgAnimation from "../components/backgroundAnimation/BackgroundAnimation";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Technologies from "../components/technologies/Technologies";
import Timeline from "../components/timeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
