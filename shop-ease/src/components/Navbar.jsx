import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="brand"><span className="brand-icon">s</span> shopease<span className="brand-dot">.</span></Link>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Link to="/cart" className="cart-link" aria-label={`Cart, ${count} items`}>
        <span className="cart-symbol">▱</span> Cart <span className="cart-count">{count}</span>
      </Link>
    </header>
  );
}