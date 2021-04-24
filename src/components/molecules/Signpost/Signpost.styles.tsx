import styled from "styled-components";

export const Wrapper = styled.div<{ vertical?: boolean }>`
  display: flex;
  width: ${({ vertical }) => (vertical ? "60px" : "auto")};
  height: ${({ vertical }) => (vertical ? "auto" : "60px")};
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  gap: 10px;
`;
