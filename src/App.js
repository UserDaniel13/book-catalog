import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import { books } from "./data";

function App() {
  <h1>Каталог книг</h1>
  return <BookList books={books} />;
}

export default App;