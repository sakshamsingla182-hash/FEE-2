import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product, onAdded }) {
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(product));
    onAdded(product.name);
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <button className="add-button" onClick={handleAdd} aria-label={`Add ${product.name} to cart`}>+</button>
        </div>
      </div>
    </article>
  );
}