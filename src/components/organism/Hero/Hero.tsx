import Box from "components/molecules/Box/Box";
import { IHero } from "types/types";
import { Wrapper } from "./Hero.styles";

const Hero = ({ title, children, src, alt, url, linkText = "more" }: IHero) => {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
      <Box title={title} url={url} linkText={linkText}>
        {children}
      </Box>
    </Wrapper>
  );
};

export default Hero;
