import MainTemplate from "view/templates/MainTemplate";
import logo from "assets/logo.svg";
import Hero from "components/organism/Hero/Hero";
import Portfolio from "components/organism/Portfolio/Portfolio";

const Home = () => {
  return (
    <MainTemplate>
      <Hero title={`I'm Marcin`} url="http://localhost:3000/" src={logo}>
        A third-year computer science student with a front end specialization,
        constantly expanding his knowledge, which he willingly shares by
        providing tutoring in programming and computer graphics for 3 years.
        Developing skills in the field of broadly understood digitization.
        Characterized by an ambitious and responsible approach to performing the
        entrusted duties.
      </Hero>
      <Portfolio />
    </MainTemplate>
  );
};

export default Home;
