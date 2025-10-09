import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AOSWrapper from "../components/AOSWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Xuefeng Hu - Portfolio",
  description: "Portfolio professionnel de Xuefeng Hu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <AOSWrapper>
            {children}
            <ScrollToTopButton />
          </AOSWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
