import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function SignUp(){
  const { signup } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();
    try{
      await signup({ name, email, password });
      nav('/');
    } catch(e){ alert(e.message); }
  }

  return (
    <section className="auth page">
      <h1>Sign up</h1>
      <form onSubmit={submit} className="auth-form">
        <label>Name<input value={name} onChange={e=>setName(e.target.value)} required/></label>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
        <div className="actions"><button className="btn" type="submit">Create account</button></div>
      </form>
    </section>
  );
}
