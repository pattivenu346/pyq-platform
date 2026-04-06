import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subjectwise · PYQ Platform Prototype",
  description: "Working prototype for college-wise PYQ discovery and admin tooling.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
