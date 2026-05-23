import "./globals.css";

import { Orbitron, VT323 } from "next/font/google";

const pixelFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});

const monoFont = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata = {
  title: "Beatriz Pagliani",
  description: "Cyberpunk Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${pixelFont.variable} ${monoFont.variable}`}>
        {children}
      </body>
    </html>
  );
}