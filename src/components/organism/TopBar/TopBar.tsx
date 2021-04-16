import { useState } from "react";
import styled from "styled-components";
import Hamburger from "components/atoms/Hamburger/Hamburger";
import Title from "components/atoms/Title/Title";
import Menu from "components/molecules/Menu/Menu";

const Wrapper = styled.header`
  display: flex;
  height: 50px;
  padding: 10px 15px;
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.color.primary};
  width: 100%;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
  }
`;

const TopBar = () => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <Title tag="h2" weight="regular">
        Marcin Czaniecki
      </Title>
      <Menu active={active} setActive={setActive} />
      <Hamburger onClick={() => setActive(true)} />
    </Wrapper>
  );
};

export default TopBar;
