import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media print {
    flex-direction: row;
  }
`;
