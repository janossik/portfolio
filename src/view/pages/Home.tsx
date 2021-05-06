import { useQuery } from "react-query";
import MainTemplate from "view/templates/MainTemplate";
import Hero from "components/organism/Hero/Hero";
import Portfolio from "view/pages/Portfolio/Portfolio";
import Bookcase from "view/pages/Bookcase/Bookcase";
import Contact from "./Contact/Contact";
import Loading from "components/atoms/Loading/Loading";
import { fetchHero } from "queries/fetch";
import { IHeroData } from "types/types";

const Home = () => {
  const { isLoading, data } = useQuery<IHeroData>("portfolioHero", fetchHero);
  if (isLoading) {
    return (
      <>
        <p style={{ textAlign: "center", paddingBottom: "20px" }}>
          Prawdopodobnie trwa uruchamianie backendu na Heroku, to może zająć
          chwilę.
        </p>
        <Loading />
      </>
    );
  }
  // @ts-ignore: Unreachable code error
  if (data?.error) {
    return <div></div>;
  }
  if (data) {
    console.log(data.image.url);
    return (
      <MainTemplate>
        <Hero
          title={data.title}
          url={data.url ? data.url : "https://github.com/janossik"}
          src={`http://159.89.177.40${data.image.url}`}
          linkText={data.linkText ? data.linkText : "Github"}
        >
          {data.description}
        </Hero>
        <Portfolio />
        <Bookcase />
        <Contact />
      </MainTemplate>
    );
  }
  return <div></div>;
};

export default Home;
