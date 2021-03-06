import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  @media print {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;
