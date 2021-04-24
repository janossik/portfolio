import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  img {
    height: 200px;
    width: 200px;
    border: 5px solid ${({ theme }) => theme.color.primary};
    border-radius: 50%;
  }
  @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
    img {
      margin: 0 auto 30px auto;
    }
  }
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    img {
      height: 300px;
      width: 300px;
      margin-bottom: 30px;
    }
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop.small}) {
  }
  @media print {
    flex-direction: row;
    img {
      margin-left: 0;
      margin-right: 30px;
    }
  }
`;
