import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: flex;
  height: 58px;
  min-width: 135px;
  margin-right: auto;
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border: solid 4px ${({ theme }) => theme.color.primary};
  border-radius: 100px;
  transition: 300ms;
  &:hover {
    color: ${({ theme }) => theme.color.background};
    background-color: ${({ theme }) => theme.color.primary};
  }
  @media print {
    display: none;
  }
`;

export default Button;
