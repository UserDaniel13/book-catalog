import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import { books } from "./data";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (book) => {
    setCart([...cart, book]);
  };
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Каталог</Link> {" "}
          <Link to="/cart">Корзина ({cart.length})</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BookList books={books} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;