import styled from "styled-components";

const MenuLink = styled.a`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.color.background};
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};
  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.color.background};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    border: none;
    &:first-child {
      border: none;
    }
  }
`;

export default MenuLink;
