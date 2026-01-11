import React from "react";
import { useAuth } from "../utils/auth";
import ProductCard from "../components/ProductCard";

export default function Profile(){
  const { user } = useAuth();
  const raw = localStorage.getItem('leaf_products');
  const products = raw ? JSON.parse(raw) : [];
  const mine = products.filter(p=> p.sellerId === (user && user.id));

  return (
    <section className="profile page">
      <h1>Profile</h1>
      {user ? (
        <div>
          <p><strong>{user.name || 'User'}</strong></p>
          <p>{user.email}</p>
          <h2>Your listings</h2>
          <div className="product-grid">
            {mine.length ? mine.map(p=> <ProductCard key={p.id} p={p} />) : <p>No listings</p>}
          </div>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </section>
  );
}
