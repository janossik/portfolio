import styled from "styled-components";
import Sign from "components/atoms/Sign/Sign";
import { ISignpost } from "interface/interface";

const Wrapper = styled.div<{ vertical?: boolean }>`
  display: flex;
  width: ${({ vertical }) => (vertical ? "60px" : "auto")};
  height: ${({ vertical }) => (vertical ? "auto" : "60px")};
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  gap: 10px;
`;

const Signpost = ({ vertical, signs }: ISignpost) => (
  <Wrapper vertical={vertical}>
    {signs.map((props) => {
      return <Sign key={props.id} {...props} />;
    })}
  </Wrapper>
);

export default Signpost;
