import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home page">
      <div className="hero">
        <h1>LEAF AND THREAD</h1>
        <p className="lead">Sustainably sourced pre-owned and vintage fashion. Minimal. Premium. Ethical.</p>
        <div className="actions">
          <Link to="/shop" className="btn">Shop</Link>
          <Link to="/sell" className="btn ghost">Sell</Link>
        </div>
      </div>
      <div className="featured">
        <h2>Featured</h2>
        <p>Newly added items are shown first in Shop. All listings are posted by users; buying handled by verified dealers.</p>
      </div>
    </section>
  );
}
