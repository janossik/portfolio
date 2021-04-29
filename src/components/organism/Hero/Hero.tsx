import { useState, useEffect, useRef } from "react";
import Box from "components/molecules/Box/Box";
import { IHero } from "types/types";
import { Wrapper } from "./Hero.styles";
import styled from "styled-components";

const IMG = styled.div<{ rot?: number; src?: string }>`
  display: block;
  background-image: url(${({ src }) => src});
  background-size: cover;
  transform: rotate(${({ rot }) => `${rot}`}deg);
  transition: 1000ms;
  user-select: none;
  height: 200px;
  width: 200px;
  border: 5px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
    margin: 0 auto 30px auto;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    height: 300px;
    width: 300px;
    margin-bottom: 30px;
  }
  @media print {
    margin-left: 0;
    margin-right: 30px;
  }
`;

const Hero = ({ title, children, src, alt, url, linkText = "more" }: IHero) => {
  const [rot, setRot] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const element = ref.current;
    const moveAnimation = (e: WheelEvent) => {
      if (active) {
        if (e.deltaY > 0) {
          setRot(rot + 30);
        } else if (e.deltaY < 0) {
          setRot(rot - 30);
        }
      }
    };

    const eventActive = (e: MouseEvent) => {
      setActive(true);
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.width = "100%";
    };
    const eventInactive = (e: MouseEvent) => {
      setActive(false);
      document.body.style.position = "";
      document.body.style.overflowY = "";
      document.body.style.width = "";
    };

    element?.addEventListener("mousedown", eventActive);
    document?.addEventListener("mouseup", eventInactive);
    element?.addEventListener("wheel", moveAnimation);
    return () => {
      element?.removeEventListener("mousedown", eventActive);
      document?.removeEventListener("mouseup", eventInactive);
      element?.removeEventListener("wheel", moveAnimation);
    };
  }, [active, rot]);
  return (
    <Wrapper>
      <IMG src={src} ref={ref} rot={rot} />
      <Box title={title} url={url} linkText={linkText}>
        {children}
      </Box>
    </Wrapper>
  );
};

export default Hero;
