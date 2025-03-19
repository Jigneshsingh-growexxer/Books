import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-book-context";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBookContext();

  const handleSubmit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="random photo"
      />
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}
      <div className="actions">
        <div className="edit" onClick={() => setShowEdit(!showEdit)}></div>
        <div className="delete" onClick={() => deleteBookById(book.id)}>
          X
        </div>
      </div>
    </div>
  );
};

export default BookShow;
