import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  height: calc(90% + 50px);
  width: 90%;

  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    height: calc(576px + 50px);
    width: 1024px;
  }
`;

export const Background = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 12;
`;
