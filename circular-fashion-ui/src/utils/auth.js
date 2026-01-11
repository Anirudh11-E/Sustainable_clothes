import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

function sha256hex(str) {
  const enc = new TextEncoder();
  return crypto.subtle.digest("SHA-256", enc.encode(str)).then((hash) => {
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  });
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('leaf_user');
    if (raw) setUser(JSON.parse(raw));
  }, []);

  async function signup({ name, email, password }) {
    const hash = await sha256hex(password);
    const id = 'u_' + Date.now();
    const u = { id, name, email, hash };
    localStorage.setItem('leaf_user', JSON.stringify(u));
    setUser(u);
    return u;
  }

  async function login({ email, password }) {
    const hash = await sha256hex(password);
    const raw = localStorage.getItem('leaf_user');
    if (!raw) throw new Error('No user');
    const stored = JSON.parse(raw);
    if (stored.email === email && stored.hash === hash) {
      setUser(stored);
      return stored;
    }
    throw new Error('Invalid credentials');
  }

  function logout() {
    setUser(null);
    // keep leaf_user persisted for simple demo; do not remove
  }

  async function resetPassword({ email, newPassword }) {
    const raw = localStorage.getItem('leaf_user');
    if (!raw) throw new Error('No user');
    const stored = JSON.parse(raw);
    if (stored.email !== email) throw new Error('No such user');
    const hash = await sha256hex(newPassword);
    stored.hash = hash;
    localStorage.setItem('leaf_user', JSON.stringify(stored));
    setUser(stored);
    return true;
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
