import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaq152 | Full Stack Software Engineer",
  description: "Personal portfolio of Gaq152, a Full Stack Software Engineer specializing in modern web development, backend services, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased selection:bg-accent-primary selection:text-background`}
      >
        {children}
      </body>
    </html>
  );
}

