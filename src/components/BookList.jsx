import BookShow from "./BookShow";
import useBookContext from "../hooks/use-book-context";

const BookList = () => {
  const { books } = useBookContext();

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
