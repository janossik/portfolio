import styled from "styled-components";
import ArrowScroll from "components/atoms/ArrowScroll/ArrowScroll";
const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 10px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div>Autorem strony jest Marcin Czaniecki</div>{" "}
      <ArrowScroll
        to="root"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      />
    </Wrapper>
  );
};
export default Footer;
