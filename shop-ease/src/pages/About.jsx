import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="page-container about-page">
      <section className="about-hero">
        <p className="eyebrow">A LITTLE ABOUT US</p>
        <h1>Shopping should feel<br /><em>like finding a little joy.</em></h1>
        <p>ShopEase is a small idea with a simple goal: make everyday shopping easier, friendlier, and a little more delightful.</p>
        <Link to="/" className="primary-button link-button">Back to home ↗</Link>
      </section>
      <section className="about-values">
        <article><span>01</span><h3>Thoughtful picks</h3><p>We focus on useful, good-looking finds that fit into real everyday life.</p></article>
        <article><span>02</span><h3>Fair-feeling prices</h3><p>Little upgrades should feel exciting, not expensive.</p></article>
        <article><span>03</span><h3>Keep it simple</h3><p>Easy browsing, a clear cart, and a smooth shopping experience.</p></article>
      </section>
    </main>
  );
}