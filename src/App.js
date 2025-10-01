import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import Cart from "./Cart";
import "./App.css";

export default function App() {
  const products = [
    {
      id: 1,
      title: "Современный жилой комплекс",
      price: 1200000,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      desc: "Стильный жилой комплекс с современными планировками и зелёными зонами.",
    },
    {
      id: 2,
      title: "Офисное здание",
      price: 3500000,
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800",
      desc: "Функциональное офисное пространство в центре города.",
    },
    {
      id: 3,
      title: "Эко-дом",
      price: 950000,
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
      desc: "Экологичный дом из натуральных материалов, идеально для уединения.",
    },
    {
      id: 4,
      title: "Минималистичный коттедж",
      price: 1800000,
      img: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800",
      desc: "Минимализм и комфорт в современном коттедже.",
    },
  ];

  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setSelected(null);
    setCartOpen(true);
  };

  return (
    <div className="app">
      <Navbar cartCount={cart.length} onCartOpen={() => setCartOpen(true)} />

      <ProductList products={products} onSelect={setSelected} />

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onBuy={addToCart}
        />
      )}

      {cartOpen && (
        <Cart cart={cart} onClose={() => setCartOpen(false)} />
      )}
    </div>
  );
}
