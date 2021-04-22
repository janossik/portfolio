import Box from "components/molecules/Box/Box";
import Mesh from "components/organism/Mesh/Mesh";
import { IChapter } from "interface/interface";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
`;
const Chapter = ({ id, title, description, children }: IChapter) => {
  return (
    <Wrapper id={id}>
      <Box title={title}>{description}</Box>
      <Mesh>{children}</Mesh>
    </Wrapper>
  );
};

export default Chapter;
