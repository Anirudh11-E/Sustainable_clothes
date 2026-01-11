import React, { useState } from "react";
import { useAuth } from "../utils/auth";

export default function ForgotPassword(){
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  const [msg, setMsg] = useState('');

  async function submit(e){
    e.preventDefault();
    try{
      await resetPassword({ email, newPassword: newPass });
      setMsg('Password reset. You are now logged in.');
    } catch(e) { setMsg(e.message); }
  }

  return (
    <section className="auth page">
      <h1>Reset password</h1>
      <form onSubmit={submit} className="auth-form">
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>New password<input type="password" value={newPass} onChange={e=>setNewPass(e.target.value)} required/></label>
        <div className="actions"><button className="btn" type="submit">Reset</button></div>
      </form>
      {msg && <p>{msg}</p>}
    </section>
  );
}
