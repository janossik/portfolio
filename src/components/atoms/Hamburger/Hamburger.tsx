import styled from "styled-components";
import hamburger from "assets/hamburger.svg";

const Hamburger = styled.button`
  height: 17.36px;
  width: 30px;
  margin-top: 5px;
  margin-left: auto;
  background-color: ${({ theme }) => theme.color.primary};
  mask: url(${hamburger});
  border: none;
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    background-color: ${({ theme }) => theme.color.background};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    display: none;
  }
  @media print {
    display: none;
  }
`;
export default Hamburger;
