import { useState } from "react";
import Hamburger from "components/atoms/Hamburger/Hamburger";
import Title from "components/atoms/Title/Title";
import Menu from "components/molecules/Menu/Menu";
import { Wrapper, StyledLink } from "./TopBar.styles";

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
