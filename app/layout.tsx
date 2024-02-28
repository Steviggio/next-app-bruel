import type { Metadata } from "next";

import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Next.js bruel's portfolio",
  description: "A Vanilla JS portfolio adapted to Next.js",
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
