import { useEffect, useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
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

  const editBook = async (id, title) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, ...res.data } : book
    );
    setBooks(updatedBooks);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
