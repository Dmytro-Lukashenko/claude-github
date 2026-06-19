import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude GitHub",
  description: "Main page scaffolded with Next.js App Router and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
