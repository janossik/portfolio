import Signpost from "components/molecules/Signpost/Signpost";
import Title from "components/atoms/Title/Title";
import { ICard } from "types/types";
import { Wrapper, Content, View } from "./Card.styles";

const Card = ({ name, src, page, github, tech_stack }: ICard) => {
  return (
    <Wrapper>
      <Title tag="h3" primary>
        {name}
      </Title>
      <View src={src} alt={"View screenshot"} width="100%" />
      <div>
        <p>Website:</p>
        <p>{page}</p>
      </div>
      <div>
        <p>Github:</p>
        <p>{github}</p>
      </div>
      <Content>
        <ul>
          {tech_stack.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <Signpost vertical page={page} github={github} />
      </Content>
    </Wrapper>
  );
};
export default Card;
