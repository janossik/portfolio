import styled from "styled-components";
import { Link } from "react-scroll";

const ArrowScroll = styled(Link)`
  position: absolute;
  display: block;
  right: 10px;
  height: 30px;
  width: 35px;
  overflow: hidden;
  ::after {
    left: 42%;
    content: " ";
    position: absolute;
    height: 15px;
    width: 5px;
    background-color: ${({ theme }) => theme.color.primary};
    transform: rotate(60deg) translateY(42%);
  }
  ::before {
    left: 42%;
    content: " ";
    position: absolute;
    height: 15px;
    width: 5px;
    background-color: ${({ theme }) => theme.color.primary};
    transform: rotate(-60deg) translateY(42%);
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    right: 20px;
    :hover {
      transform: scale(2.1);
      transition: 300ms;
    }
  }

  @media print {
    display: none;
  }
`;

export default ArrowScroll;
