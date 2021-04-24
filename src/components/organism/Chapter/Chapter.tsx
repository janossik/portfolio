import Box from "components/molecules/Box/Box";
import Mesh from "components/organism/Mesh/Mesh";
import { IChapter } from "types/types";
import { Wrapper } from "./Chapter.styles";

const Chapter = ({ id, title, description, children }: IChapter) => {
  return (
    <Wrapper id={id}>
      <Box title={title}>{description}</Box>
      <Mesh>{children}</Mesh>
    </Wrapper>
  );
};

export default Chapter;
