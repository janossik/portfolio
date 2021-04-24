import CloseButton from "components/atoms/CloseButton/CloseButton";
import MenuLink from "components/atoms/MenuLink/MenuLink";
import { IActiveState } from "types/types";
import { Wrapper } from "./Menu.styles";

const links = ["Portfolio", "Bookcase", "Contact"];

const Menu = ({ active, setActive }: IActiveState) => {
  return (
    <Wrapper active={active}>
      {links.map((link) => (
        <MenuLink
          key={link}
          to={link.toLocaleLowerCase()}
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          onClick={() => setActive(false)}
        >
          {link}
        </MenuLink>
      ))}
      <p>Where do you wanna go?</p>
      <CloseButton onClick={() => setActive(false)} />
    </Wrapper>
  );
};

export default Menu;
