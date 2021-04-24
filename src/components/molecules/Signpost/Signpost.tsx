import githubSVG from "assets/github.svg";
import pageSVG from "assets/page.svg";
import Sign from "components/atoms/Sign/Sign";
import { ISignpost } from "types/types";
import { Wrapper } from "./Signpost.styles";

const Signpost = ({ vertical, page, github }: ISignpost) => (
  <Wrapper vertical={vertical}>
    <Sign src={pageSVG} alt={"icon website"} url={page} />
    <Sign src={githubSVG} alt={"icon github"} url={github} />
  </Wrapper>
);

export default Signpost;
