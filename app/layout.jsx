import { Nunito } from "next/font/google";
import "./globals.css";
// import StoreProvider from "./StoreProvider";
import dynamic from "next/dynamic";

const StoreProvider = dynamic(() => import("@/app/StoreProvider"), {
  ssr: false,
});

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "ChopStick | Sticker Shop",
  description: "A WebApp to Browse and Buy Cool Stickers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
