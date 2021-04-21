import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 3px;
    width: 30px;
    background-color: ${({ theme }) => theme.color.background};
    transform: translateY(-100%) rotate(-45deg);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 3px;
    width: 30px;
    background-color: ${({ theme }) => theme.color.background};
    transform: translateY(-100%) rotate(45deg);
  }
  @media print {
    display: none;
  }
`;
export default CloseButton;
