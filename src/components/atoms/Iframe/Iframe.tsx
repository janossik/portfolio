import styled from "styled-components";

const Iframe = styled.iframe<{ focus?: boolean }>`
  height: 100%;
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.color.background};
  margin: auto;
  transition: 1s;
`;

export default Iframe;
