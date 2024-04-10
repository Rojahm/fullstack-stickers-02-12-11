import { Nunito } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "ChopStick | Sticker Shop",
  description: "A WebApp to Browse and Buy Cool Stickers",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${nunito.className} antialiased`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
