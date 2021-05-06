import styled from "styled-components";

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.color.background};
  margin: auto;
  object-fit: contain;
  transition: 0;
`;

export default Iframe;
