"use client";

import { useState } from "react";

export default function AdminPage() {
  const [menu, setMenu] = useState("Dashboard");

  const menus = [
    "Dashboard",
    "Produk",
    "Kategori",
    "Pesanan",
    "Voucher",
    "Banner Promo",
    "Pelanggan",
    "Pengaturan",
  ];

  return (
    <main className="min-h-screen bg-gray-100 md:flex">
      <aside className="bg-red-800 p-6 text-white md:min-h-screen md:w-64">
        <h1 className="text-2xl font-black">JASDOR.</h1>
        <p className="mt-1 text-xs text-red-200">ADMIN PANEL</p>

        <nav className="mt-8 space-y-2">
          {menus.map((item) => (
            <button
              key={item}
              onClick={() => setMenu(item)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                menu === item
                  ? "bg-white text-red-800"
                  : "text-white hover:bg-red-700"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm text-gray-500">JASDOR / Admin</p>
        <h2 className="mt-2 text-3xl font-black">{menu}</h2>

        {menu === "Dashboard" && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {["Total Pesanan", "Total Produk", "Pelanggan", "Voucher Aktif"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">{item}</p>
                <p className="mt-3 text-3xl font-black text-red-700">0</p>
              </div>
            ))}
          </div>
        )}

        {menu !== "Dashboard" && (
          <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold">{menu} JASDOR</h3>
            <p className="mt-2 text-sm text-gray-500">
              Bagian ini akan kita lengkapi dengan fitur pengelolaan data.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
