import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

function toBase64(file){
  return new Promise((res, rej)=>{
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

export default function Sell(){
  const { user } = useAuth();
  const nav = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [condition, setCondition] = useState('Good');
  const [style, setStyle] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [files, setFiles] = useState([]);

  async function submit(e){
    e.preventDefault();
    if (!user) return nav('/login');
    const imgs = [];
    for (let f of files.slice(0,5)) imgs.push(await toBase64(f));
    const raw = localStorage.getItem('leaf_products');
    const list = raw ? JSON.parse(raw) : [];
    const item = {
      id: 'p_'+Date.now(),
      title, description: desc, condition, style, brand, price, images: imgs,
      sellerId: user.id, sellerName: user.name || user.email, verified: false,
      createdAt: Date.now()
    };
    list.push(item);
    localStorage.setItem('leaf_products', JSON.stringify(list));
    nav('/shop');
  }

  return (
    <section className="sell page">
      <h1>Sell an item</h1>
      <form onSubmit={submit} className="sell-form">
        <label>Title<input value={title} onChange={e=>setTitle(e.target.value)} required/></label>
        <label>Description<textarea value={desc} onChange={e=>setDesc(e.target.value)} /></label>
        <label>Condition<input value={condition} onChange={e=>setCondition(e.target.value)} /></label>
        <label>Style<input value={style} onChange={e=>setStyle(e.target.value)} /></label>
        <label>Brand (optional)<input value={brand} onChange={e=>setBrand(e.target.value)} /></label>
        <label>Price<input type="number" value={price} onChange={e=>setPrice(e.target.value)} required/></label>
        <label>Photos (up to 5)<input type="file" accept="image/*" multiple onChange={e=>setFiles(Array.from(e.target.files))} /></label>
        <div className="actions"><button className="btn" type="submit">List item</button></div>
      </form>
    </section>
  );
}
