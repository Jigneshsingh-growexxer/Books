import { useState } from "react";
import useBookContext from "../hooks/use-book-context";
const BookCreate = () => {
  const [title, setTitle] = useState("");

  const { createBook } = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          placeholder="Enter Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="button" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
