import styled from "styled-components";
import { Link } from "react-scroll";

const MenuLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.color.background};
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};
  cursor: pointer;
  user-select: none;
  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.color.background};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    background-color: ${({ theme }) => theme.color.primary};
    border: none;
    &:first-child {
      border: none;
    }
    :hover {
      ::after {
        content: " ";
        position: absolute;
        display: flex;
        bottom: 0;
        width: 33%;
        height: 5px;
        background-color: ${({ theme }) => theme.color.background};
      }
    }
  }
  @media print {
    display: none;
  }
`;

export default MenuLink;
