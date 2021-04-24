import styled from "styled-components";

export const Wrapper = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary};
  transform: translateX(${({ active }) => (active ? "0%" : "200%")});
  transition: 600ms;
  z-index: 12;
  p {
    position: absolute;
    top: 15px;
    left: 15px;
    margin: 0;
    color: ${({ theme }) => theme.color.background};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    position: absolute;
    left: 50%;
    height: 50px;
    width: 700px;
    padding-top: 0;
    flex-direction: row;
    transform: translateX(-40%);
    transition: 0s;
    p {
      display: none;
    }
    button {
      display: none;
    }
  }
  @media print {
    display: none;
  }
`;
