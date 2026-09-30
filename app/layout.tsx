import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudransh Mathur | AI / ML Engineer",
  description:
    "Portfolio of Rudransh Mathur — AI/ML, computer vision, LLMs, research and software projects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}