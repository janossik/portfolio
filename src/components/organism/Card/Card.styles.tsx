import styled from "styled-components";

export const Wrapper = styled.article`
  position: relative;
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
  position: relative;
  display: block;
  height: clamp(112.5px, 100%, 168.75px);
  width: clamp(200px, 100%, 300px);
  margin: 0 auto;
  object-position: 50% 0;
  object-fit: cover;
  border: solid 1px ${({ theme }) => theme.color.primary};
  cursor: pointer;
`;

export const Content = styled.section`
  display: grid;
  width: clamp(200px, 100%, 300px);
  margin: 0 auto;
  padding: 10px 0;
  grid-template-columns: 1fr 60px;
  gap: 10px;
`;
