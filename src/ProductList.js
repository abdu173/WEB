import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onSelect }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onClick={() => onSelect(p)} />
      ))}
    </div>
  );
}
