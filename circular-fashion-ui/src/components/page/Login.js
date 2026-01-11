import React from "react";
import "../App.css";

function Login() {
  return (
    <div className="login-container">
      <h1>Leaves & Threads</h1>
      <p>Sign in to continue</p>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Sign In</button>
    </div>
  );
}

export default Login;
