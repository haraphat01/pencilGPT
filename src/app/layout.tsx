import type { Metadata } from "next";
import NavBar from '../app/components/navBar'
import Footer from '../app/components/footer' 
import { Inter } from "next/font/google";
import "./global.css";

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
      <body className={inter.className}>
        <NavBar /> {/* Add the NavBar component here */}
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
