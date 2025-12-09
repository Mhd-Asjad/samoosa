import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";

const phone = "+97317473535";
const message = "Hello, I came from your website and want to know more.";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });


export const metadata: Metadata = {
  title: "flower sweets - Premium Pastry & Patti",
  description: "Handcrafted gourmet samosas and restaurant-grade Patti sheets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-zinc-950 text-zinc-100 antialiased`}>
        {children}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group z-50 fixed bottom-4 right-10 flex items-center justify-center
                w-16 h-16 rounded-full bg-transparent shadow-lg cursor-pointer
                transition-all duration-500 ease-out
                hover:bg-linear-to-br hover:from-green-400 hover:to-green-500
                hover:scale-110 hover:shadow-[0_0_35px_12px_rgba(37,211,102,0.55)]"
          >
            <FaWhatsapp
              size={36}
              className="text-green-500 transition-colors duration-300 group-hover:text-white"
            />
          </a>
      </body>
    </html>
  );
}