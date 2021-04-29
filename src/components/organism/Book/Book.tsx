import Title from "components/atoms/Title/Title";
import { IBook } from "types/types";
import { Wrapper } from "./Book.styles";

const Book = ({ title, subtitle, authors, status }: IBook) => {
  return (
    <Wrapper>
      <header>
        <Title primary tag="h3" size="l">
          {title}
        </Title>
        <Title tag="h4" size="s">
          {subtitle}
        </Title>
      </header>
      <section>
        Autorzy:
        <ul>
          {authors.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <p>Status: {status}</p>
      </section>
    </Wrapper>
  );
};

export default Book;
