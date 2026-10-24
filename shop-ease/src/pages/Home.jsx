import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot"></span> GOOD THINGS, GREAT PRICES</span>
          <h1>Little things.<br /><em>Big happiness.</em></h1>
          <p>Find your new favourites for everyday living. Thoughtfully picked, easy on your wallet.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => navigate("/products")}>Explore products <span>↗</span></button>
            <button className="text-button" onClick={() => navigate("/cart")}>View your cart →</button>
          </div>
          <div className="hero-note"><span>✦</span> Curated finds for your everyday</div>
        </div>
        <div className="hero-art">
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1100&q=90" alt="Stylish everyday sneakers" />
          <div className="floating-note"><span className="note-star">✳</span><div><strong>Your next favourite</strong><small>is just a click away</small></div></div>
          <div className="round-stamp">MADE FOR<br />EVERYDAY<br /><span>✦</span></div>
        </div>
      </section>
      <section className="perks">
        <div><span>✦</span><p><strong>Handpicked finds</strong><small>Things you'll actually love</small></p></div>
        <div><span>♡</span><p><strong>Prices that feel good</strong><small>Quality without the splurge</small></p></div>
        <div><span>↗</span><p><strong>Easy shopping</strong><small>Simple, smooth, stress-free</small></p></div>
      </section>
      <section className="home-bottom">
        <div><p className="eyebrow">YOUR EVERYDAY UPGRADE</p><h2>A little something<br />for <em>every kind of you.</em></h2></div>
        <button className="outline-button" onClick={() => navigate("/products")}>Shop all products ↗</button>
      </section>
    </main>
  );
}