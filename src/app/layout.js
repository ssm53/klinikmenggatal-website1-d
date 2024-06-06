import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Klinik Menggatal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
