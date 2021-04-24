import styled from "styled-components";

const Loading = styled.div`
  @keyframes loading {
    0% {
      transform: translate(-50%, -50%) rotate(0%);
    }
    100% {
      transform: translate(-50%, -50%) rotate(720deg);
    }
  }
  position: relative;
  min-height: 200px;
  min-width: 200px;
  ::before {
    content: "LOADING";
    position: absolute;
    display: flex;
    top: 40%;
    left: 50%;
    height: 200px;
    width: 200px;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    transform: translate(-50%, -50%);
  }
  ::after {
    content: " ";
    position: absolute;
    top: 40%;
    left: 50%;
    height: 200px;
    width: 200px;
    border-top: solid 10px ${({ theme }) => theme.color.primary};
    border-left: solid 10px ${({ theme }) => theme.color.primary};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    animation: loading 3s infinite linear;
  }
`;

export default Loading;
