import styled from "styled-components";
import Title from "components/atoms/Title/Title";
import List from "components/molecules/List/List";
import { IBook } from "interface/interface";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  p {
    margin: 0 0 10px;
  }
`;

const Book = ({ title, subtitles, authors, status }: IBook) => {
  return (
    <Wrapper>
      <header>
        <Title primary tag="h3" size="l">
          {title}
        </Title>
        {subtitles.map((subtitle) => (
          <Title tag="h4">{subtitle}</Title>
        ))}
      </header>
      <section>
        Authors:
        <List id={title} list={authors} />
        <p>Status: {status}</p>
      </section>
    </Wrapper>
  );
};

export default Book;
