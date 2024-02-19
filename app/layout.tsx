import type { Metadata } from "next";
import "@/app/ui/global.css";

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
      <body >{children}</body>
    </html>
  );
}
