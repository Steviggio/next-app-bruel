import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js bruel's portfolio",
  description: "A Vanilla JS portfolio adapted to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body >{children}</body>
    </html>
  );
}