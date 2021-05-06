import styled from "styled-components";
import ArrowScroll from "components/atoms/ArrowScroll/ArrowScroll";
const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 10px;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <ArrowScroll
        to="root"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      />
      <p>Autorem strony jest Marcin Czaniecki</p>
    </Wrapper>
  );
};
export default Footer;
