import { IBook } from "types/types";
import { useQuery } from "react-query";
import Chapter from "components/organism/Chapter/Chapter";
import Book from "components/organism/Book/Book";
import Loading from "components/atoms/Loading/Loading";
import { fetchBook } from "queries/fetch";

const Bookcase = () => {
  const { isLoading, data } = useQuery<IBook[]>("books", fetchBook);
  if (isLoading) {
    return <Loading />;
  } // @ts-ignore: Unreachable code error
  if (data?.error) {
    return <div></div>;
  }
  console.log(data);
  if (data) {
    return (
      <Chapter
        id="bookcase"
        title="Biblioteczka"
        description="Tutaj znajdują się książki, które planuje przeczytać, czytam lub przeczytałem"
      >
        {data?.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </Chapter>
    );
  }
  return <div>404</div>;
};

export default Bookcase;
