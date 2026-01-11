import React from "react";

export default function ProductCard({ p }) {
  return (
    <div className="product-card">
      {p.images && p.images[0] ? (
        <img src={p.images[0]} alt={p.title} className="product-img" />
      ) : (
        <div className="product-img placeholder">No image</div>
      )}
      <div className="product-info">
        <h3 className="product-title">{p.title}</h3>
        <div className="meta">{p.condition} • {p.style} {p.brand ? `• ${p.brand}` : ""}</div>
        <div className="price">₹{p.price}</div>
        <div className="seller">Seller: {p.sellerName} {p.verified ? "(Verified)" : ""}</div>
      </div>
    </div>
  );
}
