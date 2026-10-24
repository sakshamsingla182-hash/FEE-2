import { Link } from "react-router-dom";
import React from "react";
export default function NotFound() {
  return (
    <main className="not-found">
      <span className="error-number">404</span>
      <h1>Oops, wrong aisle.</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link to="/" className="primary-button link-button">Take me home ↗</Link>
    </main>
  );
}