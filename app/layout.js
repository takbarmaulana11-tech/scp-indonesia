import "./globals.css";

export const metadata = {
  title: "JASDOR — Jasa Order",
  description: "Temukan promo makanan, minuman, dan tiket bioskop dengan mudah di JASDOR."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
