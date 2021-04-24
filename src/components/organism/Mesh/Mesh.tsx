import { IComponentWithChildren } from "types/types";
import { Wrapper } from "./Mesh.styles";

//the potential development of this component

const Mesh = ({ children }: IComponentWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Mesh;
