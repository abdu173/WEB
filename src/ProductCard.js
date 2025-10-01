import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="price">{product.price.toLocaleString()}₸</p>
    </div>
  );
}
