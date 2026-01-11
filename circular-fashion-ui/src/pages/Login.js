import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function Login(){
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  async function submit(e){
    e.preventDefault();
    try{
      await login({ email, password });
      nav('/');
    } catch (e) { setErr(e.message); }
  }

  return (
    <section className="auth page">
      <h1>Log in</h1>
      <form onSubmit={submit} className="auth-form">
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
        {err && <div className="error">{err}</div>}
        <div className="actions"><button className="btn" type="submit">Log in</button></div>
      </form>
      <p><Link to="/forgot">Forgot password?</Link></p>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </section>
  );
}
