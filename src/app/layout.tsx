import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/bootstrap.scss";

export const metadata: Metadata = {
  title: "Capitalia",
  description: "Capitalia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
