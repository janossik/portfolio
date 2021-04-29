import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  display: flex;
  height: 50px;
  padding: 10px 15px;
  color: ${({ theme }) => theme.color.primary};
  width: 100%;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0px 2px 10px 2px rgba(60, 60, 60, 0.2);
    z-index: 10;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    color: ${({ theme }) => theme.color.background};
  }
`;
