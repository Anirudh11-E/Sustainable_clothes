import React from "react";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Leaves & Threads</div>

      <input
        className="search"
        type="text"
        placeholder="Search for clothes"
      />

      <div className="icons">
        <span>Profile</span>
        <span>Support</span>
        <span>Cart</span>
      </div>
    </header>
  );
}

export default Header;
