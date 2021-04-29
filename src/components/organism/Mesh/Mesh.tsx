import { IChildren } from "types/types";
import { Wrapper } from "./Mesh.styles";

//the potential development of this component

const Mesh = ({ children }: IChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Mesh;
