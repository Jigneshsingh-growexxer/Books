import React, { useState } from "react";
import BookEdit from "./BookEdit";
const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, title) => {
    setShowEdit(!showEdit);
    onEdit(id, title);
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
        <div className="delete" onClick={() => onDelete(book.id)}>
          X
        </div>
      </div>
    </div>
  );
};

export default BookShow;
