import { useState, createContext } from "react";
import axios from "axios";

const BookContext = createContext();

export const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([...books, res.data]);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBookById = async (id, title) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, ...res.data } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        getBooks,
        createBook,
        deleteBookById,
        editBookById,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
