import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Her Intuition Lab",
  description: "21 Days to Your Next Level Begins Here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500&family=Sedan:ital@0;1&display=swap" 
          rel="stylesheet" 
        />
        <link 
  href="https://fonts.googleapis.com/css2?family=Karma:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500&family=Sedan:ital@0;1&display=swap" 
  rel="stylesheet" 
        />
        <link 
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Karma:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500&family=Sedan:ital@0;1&display=swap" 
  rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}