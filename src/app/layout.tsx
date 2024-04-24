import type { Metadata } from "next";
import NavBars from '../app/components/navBar'
import Footer from '../app/components/footer' 
import { Inter } from "next/font/google";
import "./global.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pencil GPT",
  description: "Your Gateway to Crypto Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBars /> {/* Add the NavBar component here */}
        {children}
        <GoogleAnalytics gaId="G-06GKRDP0K4" />
        <Footer /> 
      </body>
    </html>
  );
}
