import "./globals.css";
import  {Header}  from "@/sections/Header";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import {twMerge} from "tailwind-merge"
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Bright Scholars Aacademy',
  description: "Smart School Website.",
  keywords: ["kralis", "Netrobase", "school website template", "Education website", "Smart School website"],
  metadataBase: new URL("https://b.kralis.school/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>
        <Header/>
        {children}
        <CallToAction/> 
        <Footer/> 
      </body>
    </html>
  );
}
