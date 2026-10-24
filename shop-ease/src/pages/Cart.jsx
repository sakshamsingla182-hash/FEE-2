import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "../redux/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="page-container cart-page">
      <div className="page-heading"><div><p className="eyebrow">YOUR PICKS</p><h1>Your <em>cart.</em></h1><p className="muted">The good stuff is almost yours.</p></div><span className="item-total">{count} item{count !== 1 ? "s" : ""}</span></div>
      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">♡</div><h2>Your cart is taking a little break.</h2><p>Looks like you haven't found your favourites yet.</p>
          <Link className="primary-button link-button" to="/products">Explore products ↗</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info"><p className="product-category">{item.category}</p><h3>{item.name}</h3><strong>₹{item.price.toLocaleString("en-IN")}</strong>
                  <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
                <div className="quantity-control">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1} aria-label="Decrease quantity">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label="Increase quantity">+</button>
                </div>
              </article>
            ))}
            <button className="clear-button" onClick={() => dispatch(clearCart())}>Clear cart</button>
          </section>
          <aside className="order-summary"><p className="eyebrow">THE TOTAL</p><h2>Order summary</h2><div className="summary-row"><span>Subtotal ({count} items)</span><span>₹{total.toLocaleString("en-IN")}</span></div><div className="summary-row"><span>Delivery</span><span className="free-label">FREE</span></div><div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div><button className="primary-button checkout-button" onClick={() => window.alert("Thanks! Checkout is a demo for this project.")}>Continue to checkout ↗</button><p className="secure-note">✦ A little joy, on its way.</p></aside>
        </div>
      )}
    </main>
  );
}