import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommonLayout from "@/components/common-layout";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reeves",
  description: "A unisex clothing shop built with Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <CommonLayout>
        <Navbar/>
        {children}
       
        </CommonLayout>
        </body>
       
    </html>
  );
}
