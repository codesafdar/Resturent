import { Manrope } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "./globals.css";
import App from "./app";
const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${manrope.className} primary-dark text-foreground bg-background`}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
