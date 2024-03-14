import "./globals.css";
import "./layout.style.css"

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { poppins } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>
          <div>
            <div>
              <div>
                <p>logo + homez</p>
              </div>
              <div>
                <p>Home</p>
                <p>Listings</p>
                <p>Members</p>
                <p>Blog</p>
                <p>Pages</p>
              </div>
            </div>
            <div>
              <div>
                <p>ícono + login/register</p>
              </div>
              <div>
                <p>llamar al componente botón</p>
              </div>
              <div>
                <p>símbolo</p>
              </div>
            </div>
          </div>
        </header>
        
        {children}</body>
    </html>
  );
}
