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
        Student trzeciego roku informatyki o specjalności front end, zapraszam
        ciebie tutaj do zobaczenia moich projektów i mojej
      </Hero>
      <Portfolio />
      <Bookcase />
      <Contact />
    </MainTemplate>
  );
};

export default Home;
