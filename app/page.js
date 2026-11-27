"use client";

import { useState } from "react";

const categories = [
  {
    name: "Kopi Kenangan",
    slug: "kopi-kenangan",
    icon: "☕",
    description: "Kopi dan minuman favorit",
    color: "#FFF0E5",
  },
  {
    name: "Tiket Bioskop",
    slug: "tiket-bioskop",
    icon: "🎬",
    description: "XXI, CGV dan lainnya",
    color: "#F0EAFE",
  },
  {
    name: "McDonald's",
    slug: "mcdonalds",
    icon: "🍔",
    description: "Makanan dan paket hemat",
    color: "#FFF0F0",
  },
];

const products = [
  {
    name: "Promo Kopi Kenangan",
    category: "Kopi Kenangan",
    price: "Mulai dari Rp10.000",
    icon: "☕",
  },
  {
    name: "Tiket XXI",
    category: "Tiket Bioskop",
    price: "Harga promo tersedia",
    icon: "🎟️",
  },
  {
    name: "Promo McDonald's",
    category: "McDonald's",
    price: "Cek promo terbaru",
    icon: "🍟",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="text-2xl font-black tracking-tight text-red-700">
            JASDOR<span className="text-gray-900">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="/" className="text-red-700">Beranda</a>
            <a href="#kategori" className="hover:text-red-700">Kategori</a>
            <a href="#produk" className="hover:text-red-700">Promo</a>
          </nav>
          <a href="#kategori" className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-800">
            Mulai Order
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-red-800 via-red-700 to-red-950 px-7 py-14 text-white md:px-16 md:py-20">
          <div className="relative z-10 max-w-2xl">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest">
              WELCOME TO JASDOR
            </span>
            <h1 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
              Semua kebutuhan order, lebih mudah.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-red-100 md:text-base">
              Temukan berbagai promo makanan, minuman, dan tiket bioskop dalam satu tempat.
            </p>
            <a href="#kategori" className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-red-800 shadow-lg transition hover:scale-105">
              Jelajahi Sekarang →
            </a>
          </div>
          <div className="pointer-events-none absolute -right-12 -top-16 h-80 w-80 rounded-full border-[45px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-24 h-72 w-72 rounded-full bg-red-500/20 blur-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border bg-white px-5 py-4 shadow-sm focus-within:border-red-400">
          <span className="text-xl">⌕</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari produk atau layanan..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </section>

      <section id="kategori" className="mx-auto max-w-7xl px-5 py-5">
        <div className="mb-7">
          <p className="text-xs font-bold tracking-[0.2em] text-red-700">EXPLORE JASDOR</p>
          <h2 className="mt-2 text-3xl font-black">Pilih Kategori</h2>
          <p className="mt-2 text-sm text-gray-500">Temukan layanan yang ingin kamu pesan.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/${category.slug}`}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
            >
              <div
                style={{ backgroundColor: category.color }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
              >
                {category.icon}
              </div>
              <h3 className="mt-6 text-xl font-extrabold">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-bold text-red-700">Lihat Layanan</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="produk" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-7">
          <p className="text-xs font-bold tracking-[0.2em] text-red-700">SPECIAL OFFERS</p>
          <h2 className="mt-2 text-3xl font-black">Promo Pilihan</h2>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl bg-white p-8 text-center text-sm text-gray-500">
            Produk tidak ditemukan.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <a
                key={product.name}
                href={`/${categories.find((c) => c.name === product.category)?.slug}`}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex h-32 items-center justify-center rounded-2xl bg-gray-50 text-5xl">
                  {product.icon}
                </div>
                <p className="mt-5 text-xs font-bold text-red-700">{product.category}</p>
                <h3 className="mt-2 text-lg font-extrabold">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.price}</p>
                <div className="mt-5 rounded-xl bg-red-700 py-3 text-center text-sm font-bold text-white">
                  Lihat Detail →
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-10 bg-gray-950 px-5 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-black">JASDOR.</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
            Jasa Order — satu tempat untuk berbagai kebutuhan dan promo favoritmu.
          </p>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-500">
            © 2026 JASDOR. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
