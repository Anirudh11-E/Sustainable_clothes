import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function readProducts() {
  try {
    const raw = localStorage.getItem('leaf_products');
    if (!raw) return [];
    return JSON.parse(raw);
  } catch { return []; }
}

export default function Shop(){
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');

  useEffect(()=>{
    const p = readProducts();
    // newest first
    p.sort((a,b)=> b.createdAt - a.createdAt);
    setProducts(p);
  }, []);

  const filtered = products.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <section className="shop page">
      <div className="shop-header">
        <h1>Shop</h1>
        <input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="product-grid">
        {filtered.length ? filtered.map(p => <ProductCard key={p.id} p={p} />) : <p>No items</p>}
      </div>
    </section>
  );
}
