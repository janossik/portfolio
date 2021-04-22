import github from "assets/github.svg";
import page from "assets/page.svg";
import image from "assets/image_portfolio.png";
import Card from "components/organism/Card/Card";
import Chapter from "components/organism/Chapter/Chapter";

const portfolio = [
  {
    id: "011",
    src: image,
    signs: [
      {
        id: "sign01",
        src: github,
        alt: "github",
        url: "https://github.com/janossik/pokemon-app",
      },
      {
        id: "sign02",
        src: page,
        alt: "page",
        url: "https://pokemonappbyjanossik.netlify.app",
      },
    ],
    techStack: ["typeScript", "react", "styled-components", "react-query"],
  },
  {
    id: "021",
    src: image,
    signs: [
      {
        id: "sign03",
        src: github,
        alt: "github",
        url: "https://github.com/janossik/pokemon-app",
      },
      {
        id: "sign04",
        src: page,
        alt: "page",
        url: "https://pokemonappbyjanossik.netlify.app",
      },
    ],
    techStack: ["typeScript", "react", "styled-components", "react-query"],
  },
  {
    id: "031",
    src: image,
    signs: [
      {
        id: "sign05",
        src: github,
        alt: "github",
        url: "https://github.com/janossik/pokemon-app",
      },
      {
        id: "sign06",
        src: page,
        alt: "page",
        url: "https://pokemonappbyjanossik.netlify.app",
      },
    ],
    techStack: ["typeScript", "react", "styled-components", "react-query"],
  },
  {
    id: "041",
    src: image,
    signs: [
      {
        id: "sign07",
        src: github,
        alt: "github",
        url: "https://github.com/janossik/pokemon-app",
      },
      {
        id: "sign08",
        src: page,
        alt: "page",
        url: "https://pokemonappbyjanossik.netlify.app",
      },
    ],
    techStack: ["typeScript", "react", "styled-components", "react-query"],
  },
];

const Portfolio = () => {
  return (
    <Chapter
      id="portfolio"
      title="Portfolio"
      description="Completed non-commercial project"
    >
      {portfolio.map((props) => (
        <Card key={props.id} {...props} />
      ))}
    </Chapter>
  );
};

export default Portfolio;
