import { Nunito } from "next/font/google";
import "../globals.css";
import Footer from "./ui/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "ChopStick | Sticker Shop",
  description: "A WebApp to Browse and Buy Cool Stickers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
