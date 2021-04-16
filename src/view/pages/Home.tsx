import styled from "styled-components";
import MainTemplate from "view/templates/MainTemplate";

const Wrapper = styled.article`
  padding: 15px;
`;

const Home = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <h1>Hello World!</h1>
      </Wrapper>
    </MainTemplate>
  );
};

export default Home;
