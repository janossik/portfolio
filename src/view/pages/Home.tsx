import MainTemplate from "view/templates/MainTemplate";
import logo from "assets/logo.svg";
import Hero from "components/organism/Hero/Hero";
import Portfolio from "view/pages/Portfolio/Portfolio";
import Bookcase from "view/pages/Bookcase/Bookcase";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <MainTemplate>
      <Hero
        title={`Cześć, jestem Marcin!`}
        url="https://github.com/janossik"
        src={logo}
        linkText="GitHub"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam
        nesciunt dignissimos amet consectetur iure. Ut vero eaque, deserunt
        dolor cumque tenetur ullam dignissimos modi natus delectus aspernatur.
        Beatae, tenetur!
      </Hero>
      <Portfolio />
      <Bookcase />
      <Contact />
    </MainTemplate>
  );
};

export default Home;
