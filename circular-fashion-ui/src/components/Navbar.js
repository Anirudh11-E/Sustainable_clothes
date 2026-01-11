import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <header className="header">
      <div className="logo">LEAF AND THREAD</div>
      <nav className="icons">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/profile">Profile</Link>
        {user ? (
          <button onClick={() => { logout(); nav('/'); }} className="nav-btn">Sign out</button>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </nav>
    </header>
  );
}

