import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import { books } from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (book) => {
    setCart([...cart, book]);
  };
  return <BookList books={books} addToCart={addToCart} />;
}

export default App;