import Chapter from "components/organism/Chapter/Chapter";
import Book from "components/organism/Book/Book";
import { IBook } from "interface/interface";

const bookcase: IBook[] = [
  {
    title: "Agile",
    subtitles: ["Przewodnik po zwinnych metodykach programowania"],
    authors: ["Andrew Stellman", "Jennifer Greene"],
    status: "plans",
  },
  {
    title: "Czysty kod",
    subtitles: ["Podręcznik dobrego programisty"],
    authors: ["Robert C. Martin"],
    status: "read",
  },
  {
    title: "Czysta architektura",
    subtitles: [
      "Struktura i design oprogramowania",
      "Przewodnik dla profesjonalistów",
    ],
    authors: ["Robert C. Martin"],
    status: "readed",
  },
];

const Bookcase = () => {
  return (
    <Chapter
      id="bookcase"
      title="Bookcase"
      description="Here are the books I'm going to read"
    >
      {bookcase.map((book) => {
        return <Book {...book} />;
      })}
    </Chapter>
  );
};

export default Bookcase;
