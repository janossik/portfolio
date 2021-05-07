import { useState } from "react";
import Modal from "components/organism/Modal/Modal";
import Signpost from "components/molecules/Signpost/Signpost";
import Title from "components/atoms/Title/Title";
import Iframe from "components/atoms/Iframe/Iframe";
import { ICard } from "types/types";
import { Wrapper, Content, View } from "./Card.styles";

const Card = ({ name, page, image, github, tech_stack }: ICard) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Modal active={active} setActive={setActive}>
        <>
          <Title tag="h3" primary>
            {name}
          </Title>
          <Iframe src={page} title={`Iframe-${name}`} />
        </>
      </Modal>
      <Wrapper>
        <Title tag="h3" primary>
          {name}
        </Title>
        <View
          src={`https://marcincz.pl${image.url}`}
          alt={"View screenshot"}
          width="100%"
          onClick={() => setActive(true)}
        />
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
    </>
  );
};
export default Card;
