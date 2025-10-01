import React from "react";

export default function ProductModal({ product, onClose, onBuy }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✖</button>
        <div className="modal-left">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="modal-right">
          <h2>{product.title}</h2>
          <p className="price">{product.price.toLocaleString()}₸</p>
          <p className="desc">{product.desc}</p>
          <button className="buy" onClick={() => onBuy(product)}>Купить</button>
        </div>
      </div>
    </div>
  );
}
