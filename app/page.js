"use client";

import { useState } from "react";

const products = [
  { name: "Kopi Kenangan", category: "Makanan & Minuman", price: "Rp25.000", icon: "☕" },
  { name: "Tiket XXI", category: "Tiket Bioskop", price: "Rp20.000", icon: "🎬" },
  { name: "Tiket CGV", category: "Tiket Bioskop", price: "Rp25.000", icon: "🍿" },
  { name: "Promo Makanan", category: "Makanan & Minuman", price: "Rp30.000", icon: "🍔" }
];

export default function Home() {
  const [category, setCategory] = useState("Semua");

  const filtered = category === "Semua"
    ? products
    : products.filter(p => p.category === category);

  return (
    <main>
      <header>
        <h2>JAS<span>DOR.</span></h2>
        <small>JASA ORDER • PROMO HEMAT</small>
      </header>

      <section className="hero">
        <p>SELAMAT DATANG DI JASDOR</p>
        <h1>Promo menarik,<br/>order lebih mudah.</h1>
        <p>Temukan berbagai promo makanan,
        minuman dan tiket bioskop favoritmu.</p>
        <button onClick={() =>
          document.getElementById("produk").scrollIntoView()
        }>Lihat Promo</button>
      </section>

      <section id="produk">
        <h2>Promo Pilihan</h2>
        <p>Temukan penawaran menarik hari ini.</p>

        <nav>
          {["Semua", "Makanan & Minuman", "Tiket Bioskop"].map(c => (
            <button key={c}
              className={category === c ? "active" : ""}
              onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </nav>

        <div className="products">
          {filtered.map((p, i) => (
            <article key={i}>
              <div className="product-icon">{p.icon}</div>
              <small>{p.category}</small>
              <h3>{p.name}</h3>
              <strong>{p.price}</strong>
              <button onClick={() =>
                window.open("https://wa.me/6283892700799", "_blank")
              }>Pesan Sekarang</button>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <h2>JASDOR.</h2>
        <p>Jasa Order Mudah, Promo Lebih Hemat.</p>
        © 2026 JASDOR Indonesia
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial,sans-serif;
          color: #242424; background: #fff; }
        header { padding: 22px 8%; border-bottom: 1px solid #eee; }
        header h2, footer h2 { margin: 0; color: #d71920; }
        header h2 span { color: #222; }
        header small { font-size: 10px; letter-spacing: 2px; }
        .hero { background: #b9141d; color: white;
          padding: 65px 9%; }
        .hero h1 { font-size: clamp(35px,6vw,58px); }
        button { cursor: pointer; border: 0; border-radius: 9px;
          padding: 12px 18px; font-weight: bold; }
        .hero button { background: white; color: #bd151d; }
        #produk { padding: 45px 8%; }
        nav { display: flex; gap: 9px; flex-wrap: wrap;
          margin: 24px 0; }
        nav button { background: #f3f3f3; }
        nav button.active { background: #c71922; color: white; }
        .products { display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 18px; }
        article { border: 1px solid #eee; border-radius: 15px;
          padding: 18px; }
        .product-icon { background: #fff0f0; border-radius: 12px;
          padding: 24px; text-align: center; font-size: 40px; }
        article small { color: #888; display: block; margin-top: 14px; }
        article strong { display: block; color: #c71922; margin: 12px 0; }
        article button { background: #c71922; color: white; width: 100%; }
        footer { background: #202020; color: white;
          text-align: center; padding: 35px; }
        @media(max-width:480px) {
          #produk { padding: 30px 5%; }
          .products { gap: 10px; }
          article { padding: 11px; }
        }
      `}</style>
    </main>
  );
}
