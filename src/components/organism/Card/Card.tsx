import styled from "styled-components";
import Title from "components/atoms/Title/Title";
import Signpost from "components/molecules/Signpost/Signpost";
import List from "components/molecules/List/List";
import { ICard } from "interface/interface";

const Wrapper = styled.article`
  img {
    width: 100%;
  }
  p {
    display: none;
  }
  @media print {
    h3 {
      margin-bottom: 10px;
    }
    img {
      display: none;
    }
    p {
      display: block;
      font-size: 14px;
      margin: 0 0 8px 0;
      :nth-child(odd) {
        ::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
`;

const Content = styled.section`
  display: grid;
  padding: 10px 0;
  grid-template-columns: 1fr 60px;
  gap: 10px;
`;

const Card = ({ id, src, signs, techStack }: ICard) => {
  return (
    <Wrapper>
      <Title tag="h3" primary>
        POKEMON APP
      </Title>
      {signs.map(({ alt, url }) => {
        return (
          <div key={id + alt + url}>
            <p>{alt}:</p>
            <p>{url}</p>
          </div>
        );
      })}
      <img src={src} alt="Podglad na aplikacje" />
      <Content>
        <div>
          <Title tag="h4" primary>
            Tech stack
          </Title>
          <List id={id} list={techStack} />
        </div>
        <Signpost vertical signs={signs} />
      </Content>
    </Wrapper>
  );
};
export default Card;
