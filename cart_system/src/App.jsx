import React, { useReducer } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: 50000, icon: "💻", color: "#e9e7ff" },
  { id: 2, name: "Headphones", price: 2000, icon: "🎧", color: "#ffe9e3" },
  { id: 3, name: "Wireless Mouse", price: 500, icon: "🖱️", color: "#e0f5ec" },
  { id: 4, name: "Smartphone", price: 25000, icon: "📱", color: "#e0edff" },
  { id: 5, name: "Smart Watch", price: 3500, icon: "⌚", color: "#fff0cc" },
  { id: 6, name: "Camera", price: 18000, icon: "📷", color: "#fbe5f1" }
];

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD":
      if (cart.some(item => item.id === action.product.id)) {
        return cart.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...cart, { ...action.product, quantity: 1 }];

    case "INCREASE":
      return cart.map(item =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return cart
        .map(item =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case "REMOVE":
      return cart.filter(item => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return cart;
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#" className="logo">shop<span>easy.</span></a>
        <div className="nav-right">
          <span>Discover products you'll love</span>
          <a href="#cart" className="cart-link">
            🛒 <span>My Cart</span> <b>{count}</b>
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <span className="eyebrow">THE EVERYDAY COLLECTION</span>
          <h1>Good things.<br /><span>Better prices.</span></h1>
          <p>Find your favourites, add them to your cart, and make every purchase count.</p>
          <a href="#products" className="shop-btn">Explore Products ↗</a>
        </div>
        <div className="hero-art">
          <div className="hero-circle"></div>
          <span className="hero-emoji">🛍️</span>
          <span className="float-tag tag-one">✦ Your happy place</span>
          <span className="float-tag tag-two">♡ Great finds</span>
        </div>
      </header>

      <main className="main-layout">
        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HANDPICKED FOR YOU</span>
              <h2>Explore Products<span>.</span></h2>
            </div>
            <span className="product-count">{products.length} products</span>
          </div>

          <div className="product-grid">
            {products.map(product => (
              <article className="product-card" key={product.id}>
                <div
                  className="product-image"
                  style={{ background: product.color }}
                >
                  <span>{product.icon}</span>
                  <span className="product-label">POPULAR PICK</span>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <button
                      className="add-btn"
                      onClick={() => dispatch({ type: "ADD", product })}
                    >+ Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="cart-panel" id="cart">
          <div className="cart-heading">
            <div>
              <span className="eyebrow">YOUR SELECTION</span>
              <h2>Shopping Cart</h2>
            </div>
            <span className="cart-count">{count}</span>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>A little empty here!</h3>
              <p>Your next favourite is waiting. Add something you love.</p>
              <a href="#products">Browse products ↓</a>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    <div
                      className="cart-item-image"
                      style={{ background: item.color }}
                    >{item.icon}</div>
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>₹{item.price.toLocaleString("en-IN")}</p>
                      <div className="quantity">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => dispatch({
                            type: "DECREASE", id: item.id
                          })}
                        >−</button>
                        <span>{item.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => dispatch({
                            type: "INCREASE", id: item.id
                          })}
                        >+</button>
                      </div>
                    </div>
                    <div className="cart-item-end">
                      <button
                        className="remove-btn"
                        aria-label="Remove item"
                        onClick={() => dispatch({
                          type: "REMOVE", id: item.id
                        })}
                      >×</button>
                      <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="clear-btn"
                onClick={() => dispatch({ type: "CLEAR" })}
              >Clear entire cart</button>

              <div className="summary">
                <div><span>Items</span><span>{count}</span></div>
                <div><span>Delivery</span><span className="free">FREE</span></div>
                <div className="total-row">
                  <span>Total amount</span>
                  <strong>₹{total.toLocaleString("en-IN")}</strong>
                </div>
                <p className="secure-note">♡ &nbsp; A little happiness in every order.</p>
              </div>
            </>
          )}
        </aside>
      </main>

      <footer>
        <a href="#" className="logo">shop<span>easy.</span></a>
        <p>Thoughtful finds. Everyday joy.</p>
        <span>© 2026 ShopEasy</span>
      </footer>
    </div>
  );
}