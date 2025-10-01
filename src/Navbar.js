import React, { useState } from "react";

export default function Navbar({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🏗️ АрхПроекты</div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Проекты</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>

      <div className="actions">
        <button className="cart-btn" onClick={onCartOpen}>
          🛒 {cartCount}
        </button>
        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
