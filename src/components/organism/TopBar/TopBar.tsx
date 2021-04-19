import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    box-shadow: 0px 2px 10px 2px rgba(60, 60, 60, 0.2);
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    color: ${({ theme }) => theme.color.background};
  }
`;

const TopBar = () => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <StyledLink to="/">
        <Title tag="h2" weight="regular">
          Marcin Czaniecki
        </Title>
      </StyledLink>
      <Menu active={active} setActive={setActive} />
      <Hamburger onClick={() => setActive(true)} />
    </Wrapper>
  );
};

export default TopBar;
