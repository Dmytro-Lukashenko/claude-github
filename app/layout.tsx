import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "claude-github",
  description: "Main page built with the Next.js framework",
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
