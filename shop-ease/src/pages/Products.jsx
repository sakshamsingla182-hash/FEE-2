import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import React from "react";
export default function Products() {
  const [message, setMessage] = useState("");

  function showAdded(name) {
    setMessage(`${name} added to your cart!`);
    window.clearTimeout(window.addedMessageTimer);
    window.addedMessageTimer = window.setTimeout(() => setMessage(""), 2400);
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <div><p className="eyebrow">THE GOOD STUFF</p><h1>Find your <em>favourite.</em></h1><p className="muted">Little upgrades for your everyday life.</p></div>
        <span className="item-total">08 handpicked items</span>
      </div>
      {message && <div className="toast" role="status"><span>✓</span> {message}</div>}
      <div className="product-grid">
        {products.map((product) => <ProductCard key={product.id} product={product} onAdded={showAdded} />)}
      </div>
    </main>
  );
}