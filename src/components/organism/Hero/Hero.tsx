import styled from "styled-components";
import Box from "components/molecules/Box/Box";
import { IHero } from "interface/interface";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  img {
    height: 200px;
    width: 200px;
    border: 5px solid ${({ theme }) => theme.color.primary};
    border-radius: 50%;
  }

  @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
    img {
      margin: 0 auto 30px auto;
    }
  }
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    img {
      height: 300px;
      width: 300px;
      margin-bottom: 30px;
    }
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
  }
`;

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
