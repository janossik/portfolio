import styled from "styled-components";

export const Wrapper = styled.article`
  p {
    display: none;
  }
  h3 {
    margin-bottom: 10px;
  }
  @media print {
    img {
      display: none;
    }
    p {
      display: block;
      font-size: 14px;
      margin: 0 0 8px 0;
      :nth-child(odd) {
        ::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
`;

export const View = styled.img`
  height: 140px;
  width: 100%;
  object-position: 50% 0;
  object-fit: cover;
`;

export const Content = styled.section`
  display: grid;
  padding: 10px 0;
  grid-template-columns: 1fr 60px;
  gap: 10px;
`;
