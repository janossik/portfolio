import Box from "components/molecules/Box/Box";
import Mesh from "components/organism/Mesh/Mesh";
import { IChapter } from "interface/interface";

const Chapter = ({ id, title, description, children }: IChapter) => {
  return (
    <article id={id}>
      <Box title={title}>{description}</Box>
      <Mesh>{children}</Mesh>
    </article>
  );
};

export default Chapter;
