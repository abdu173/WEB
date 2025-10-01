import React from "react";

export default function Cart({ cart, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✖</button>
        <h2>Корзина</h2>
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.price.toLocaleString()}₸</p>
                </div>
              </div>
            ))}
            <button className="checkout">Перейти к покупке</button>
          </div>
        ) : (
          <p>Корзина пуста</p>
        )}
      </div>
    </div>
  );
}
